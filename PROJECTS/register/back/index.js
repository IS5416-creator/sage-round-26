const express = require("express")
const bcrypt = require("bcryptjs")
const User = require("./model/user")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())
require('dotenv').config()

require("./db/db")



const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) {
            return res.status(401).json({ error: 'Access token required' })
        }

        const decoded = jwt.verify(token, process.env.secret)
        const user = await User.findById(decoded.id).select('-password')

        if (!user) {
            return res.status(403).json({ error: 'User not found' })
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token' })
    }
}

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' })
})

app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' })
        }

        const user = new User({
            name,
            email,
            password
        })

        await user.save()

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.secret,
            { expiresIn: '24h' }
        )

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            }
        })
    } catch (error) {
        console.error('Registration error:', error)

        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message)
            return res.status(400).json({ error: errors.join(', ') })
        }

        res.status(500).json({ error: 'Server error during registration' })
    }
})

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password required' })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            }
        })
    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ error: 'Server error during login' })
    }
})

app.get('/api/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.find()
            .select('-password')
            .sort({ createdAt: -1 })

        res.json(users)
    } catch (error) {
        console.error('Get users error:', error)
        res.status(500).json({ error: 'Failed to fetch users' })
    }
})

app.get('/api/profile', authenticateToken, (req, res) => {
    res.json(req.user)
})

app.put('/api/profile', authenticateToken, async (req, res) => {
    try {
        const updates = req.body

        delete updates.email
        delete updates.password
        delete updates._id

        const user = await User.findByIdAndUpdate(
            req.user._id,
            updates,
            { new: true, runValidators: true }
        ).select('-password')

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        res.json({
            message: 'Profile updated successfully',
            user
        })
    } catch (error) {
        console.error('Update profile error:', error)
        res.status(500).json({ error: 'Failed to update profile' })
    }
})

app.delete('/api/profile', authenticateToken, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user._id)
        res.json({ message: 'Account deleted successfully' })
    } catch (error) {
        console.error('Delete profile error:', error)
        res.status(500).json({ error: 'Failed to delete account' })
    }
})

app.listen(process.env.PORT || 3001)
