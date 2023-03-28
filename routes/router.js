const express = require('express')
const router = express.Router()

const authController= require('../controllers/authController.js')

//const conexion = require('../database/db')

//RUTAS PARA LAS VISTAS
router.get('/', authController.siAutenticado, (req, res) => {
    // conexion()
    res.render('index',{user:req.user})
})

router.get('/login', (req, res) => {
    res.render('login', {alert:false})
})

router.get('/register', (req, res) => {
    res.render("register")
})


//RUTAS PARA LOS MATODOS DEL CONTROLADOR
router.post('/register',authController.register)
router.post('/login',authController.login)
router.get('/logout',authController.logout)

module.exports = router