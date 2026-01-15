const express = require('express')
const users = require("./data/users")
const app = express()
let books = require("./data/books")

app.set("view engine", "ejs")
app.use(express.json())
app.use((req, res, next) => {
    if (req.query.key != 1) {
        res.status(404).json({
            success: "false",
            message: "key not found"
        })
    } else {
        next()
    }
})

app.get('/', (req, res) => {
    res.send("home page from get method")
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.post("/books", (req, res) => {
    const body = req.body
    const id = books.length + 1
    body.id = id
    books.push(body)
    res.status(201).json({
        success: "true",
        message: "book created"
    })
    console.log(body)
})

app.delete("/books/:id", (req, res) => {
    const id = req.params.id
    books = books.filter((book) => book.id != id)
    res.status(201).json({
        success: "true",
        message: "book deleted"
    })

})

app.put("/books/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    books = books.map((book) => {
        if (book.id == id) {
            return { ...book, ...body }
        } else {
            return book
        }
    })
    res.status(200).json({
        success: "true",
        message: "book updated"
    })
})

// query
app.get("/books/search", (req, res) => {
    const q = req.query.q.toLowerCase()
    const book = books.filter((book) => book.title.toLowerCase().includes(q))
    console.log(book)
    res.status(200).json(book)
})




// params

app.get("/books/:id", (req, res) => {
    const id = req.params.id
    const book = books.find((book) => book.id == id)
    if (book == undefined) {
        res.status(404).json({
            success: "no success",
            message: "book not found"
        })
    } else {
        res.status(200).json(book)
    }

})




// app.put('/',(req,res)=>{
//     res.send("home page from put method")
// })
// app.post('/',(req,res)=>{
//     res.send("home page from post method")
// })
// app.delete('/',(req,res)=>{
//     res.send("home page from delete method")
// })
// app.get('/post',(req,res)=>{
//     res.render("index")
// })
// app.get('/about',(req,res)=>{
//     res.render("about",{users:users})
// })

// app.get('/user',(req,res)=>{
//     res.json({
//         "name":"israel",
//         "gender":"M"
//     })
// })

app.listen(3000, () => {
    console.log("listening on port 3000")
})