const express = require('express')
const router = require('./router')
const path = require('path')

const server = express()

server.use(router)

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

server.listen(3000, ()=> console.log('Rodando'))