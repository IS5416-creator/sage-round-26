const express = require("express")
const Movie = require("./model/movie")


const app = express()
app.use(express.json())

require("./db/db")
app.get('/movies',async (req,res)=>{
    const movies = await Movie.find()
    res.status(200).json(movies)
})
app.get('/movies/:id',async (req,res)=>{
    const movie = await Movie.findById(req.params.id)
    if(!movie) return res.satatus(404).json({
        success: "false",
        message: "movie not found"
    })  
    return res.status(200).json(movie)
})

app.post('/movies',async (req,res)=>{
    try{
        const body = req.body
        const movie = new Movie(body)
        await movie.save()
        res.status(200).json(movie)
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:"false",
            message:"error"
        })
    }

})

app.delete("/movies/:id", async(req,res)=>{
    await Movie.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:"true",
        message:"movie deleted successfully"
    })
})
app.put("/movies/:id", async (req,res)=>{
    await Movie.findByIdAndUpdate(req.params.id)
    res.status(200).json({
        success:"true",
        message:"movie updated successfully"
    })
})


app.listen(3001)