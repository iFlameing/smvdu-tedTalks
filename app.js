const express = require('express')
const app =express()


app.set('view engine','ejs')
app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.render("imageslider.ejs")
})

app.get('/team',(req,res)=>{
    res.render('contributors.ejs');
})

app.get('/speakers',(req,res)=>{
    res.render('speakers.ejs')
})
app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.listen(process.env.PORT,function(){
    console.log("server is listening at localhost 3000")
})