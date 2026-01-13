const express = require('express')
const users = require("./data/users")
const app = express()

app.set("view engine","ejs")

app.get('/',(req,res)=>{
    res.send("home page")
})
app.get('/post',(req,res)=>{
    res.render("index")
})
app.get('/about',(req,res)=>{
    res.render("about",{users:users})
})
app.get('/user',(req,res)=>{
    res.json({
        "name":"israel",
        "gender":"M"
    })
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})