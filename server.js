const express = require('express');
const path = require('path');
const ejs = require('ejs')

const app = express();
const port = process.env.PORT || 3000; // For live 

//public static path
app.use(express.static(path.join(__dirname,"public"))); 

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.render('404error',{errorMsg: "OOPS Page Not Found !!!"})
})
// Start the Express server
app.listen(port, () => console.log(`Server running on port ${port}`))