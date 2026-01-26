const express = require("express")
const Movie = require("./model/movie")
const bcrypt = require("bcryptjs")
const User = require("./model/user")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

require("./db/db")

app.post('/signup', async (req, res) => {
    const { fullName, userName, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 5)
    const user = new User({ fullName, userName, password: hashedPassword })
    user.save()
    res.status(200).json({
        success: true,
        message: "signup successful"
    })
})

app.post('/login', async (req, res) => {
    const { userName, password } = req.body
    const user = await User.findOne({ userName })
    if (!user) return res.status(404).json({ message: "incorrect username or password" })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(404).json({ message: "incorrect password" })
    const token = jwt.sign({ id: user._id, fullName: user.fullName }, "321")
    res.status(200).json({
        success: true,
        message: "logged in",
        token: token
    })
})

function auth(req, res, next) {
    const token = req.headers['authentication']?.split("")[1]
    if (!token) res.status(401).json({ "error": "token not found" })
    jwt.verify(token, '123', (err, decoded) => {
        if (err) res.status(401).json({ "error": "invalid token" })
        req.user = decoded
        next()
    })
}

app.get('/users',auth, async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

app.get('/movies', async (req, res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
})
app.get('/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    if (!movie) return res.satatus(404).json({
        success: "false",
        message: "movie not found"
    })
    return res.status(200).json(movie)
})

app.post('/movies', async (req, res) => {
    try {
        const body = req.body
        const movie = new Movie(body)
        await movie.save()
        res.status(200).json(movie)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            success: "false",
            message: "error"
        })
    }

})

app.delete("/movies/:id", async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: "true",
        message: "movie deleted successfully"
    })
})
app.put("/movies/:id", async (req, res) => {
    await Movie.findByIdAndUpdate(req.params.id)
    res.status(200).json({
        success: "true",
        message: "movie updated successfully"
    })
})


app.listen(3001)