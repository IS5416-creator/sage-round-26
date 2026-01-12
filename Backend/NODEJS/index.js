const fs=require('fs')

// fs.writeFile('output.txt','yello from nodejs',(err)=>{
//     console.log(err)
// })

fs.readFile('output.txt','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data)
})