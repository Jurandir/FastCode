const moment = require('moment')

moment.locale('pt-br')

const routerAPI = async () => { 
  
    const UNIT       = 'serverAPI'
    const port       = 5000
    const modo       = 'Test'

    let txt
    let now = moment().format('DD/MM/YYYY HH:mm:ss')

    txt = 
    `// Fast Code v1.0 - Server API - ${now}
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
    
    const port = process.env.PORT || '${port}'
    const modo = process.env.NODE_ENV || '${modo}'
    
    function server () {
        app.listen(port, function () {
            console.log('${UNIT} - rodando na porta ',port ,' : Modo ',modo)
        })
     }
     
     module.exports = server
    `
    
return txt

}

module.exports = routerAPI
