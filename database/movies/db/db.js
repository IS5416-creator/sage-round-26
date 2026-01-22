const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://IS5416:abcdefghisru5416@cluster0.yyptkvj.mongodb.net/sage?appName=Cluster0')
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err))