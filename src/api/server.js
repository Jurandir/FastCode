// Fast Code v1.0 - Server API - 21/03/2021 23:54:15
    const express      = require('express')  
    const morgan       = require('morgan')
    
    const app = express()  
    
    const api = require('../routes/api')  
    
    app.use(express.static('public'))
    app.use(morgan('dev'))
    
    app.use(function (req, res, next) {  
        res.header("Access-Control-Allow-Origin", "*")  
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")  
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')  // PUT, POST, GET, DELETE, OPTIONS
        next()  
    }) 
    
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    
    app.use('/api', api )  
    
    const port = process.env.PORT || '5000'
    const modo = process.env.NODE_ENV || 'Test'
    
    function server () {
        app.listen(port, function () {
            console.log('serverAPI - rodando na porta ',port ,' : Modo ',modo)
        })
     }
     
     module.exports = server
    