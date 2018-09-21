const express = require('express')
const app =express()


app.use(express.static("public"))

app.get('/in',(req,res)=>{
    res.send("This is file coming soon")
})

app.listen(3000,()=>{
    console.log("server is listening at localhost 3000")
})