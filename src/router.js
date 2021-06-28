const express = require('express')

const router = express.Router()

//Criação de rotas
router.get('/', (req, res) => res.render('home'))
router.get('/room', (req, res) => res.render('room'))
router.get('/create-pass', (req, res) => res.render('create-pass'))

//Formato que o formulario de dentro da modal tem que passar a informação
//router.post('/room/:room/:question/:action', (req, res) => res.render('exemplo', {req}))

module.exports = router