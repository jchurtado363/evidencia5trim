const express = require('express')
const dotenv = require('dotenv')
const cookieParser= require ('cookie-parser')

const app = express()
//SETEAMOS EL MOTOR DE PLANTILLA
app.set('view engine','ejs')
//SETEAMOS LA CARPETA PUBLIC PARA ARCHIVOS ESTATICOS 
app.use(express.static('public'))
//para procesar datos enviados desde form

app.use(express.urlencoded({extended:true}))
app.use(express.json())
//SETEAMOS VARIABLES DE ENTORNO
dotenv.config({path:'./env/.env'})

//para poder trabajar con las cookies
app.use(cookieParser())

//llamamos a router
app.use('/',require('./routes/router.js')) 

app.use(function(req,res,next){
    if (!req.user)
    res.header('Cache-Control','private,no-cache, no-store, must-revalidate');
    next();
});



/*
app.get('/',(req,res)=>{
    res.render('index')
}) */

app.listen(3000, ()=>{
    console.log ('SERVER UP runnung in http://localhost:3000')
})

