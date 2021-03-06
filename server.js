const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/register',(req,res)=>{
    res.render('register');
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/',(req,res)=>{
    // res.redirect('/login');
    res.render('profile');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('app running on port '+ PORT);
})