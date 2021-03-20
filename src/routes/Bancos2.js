
    // Fast Code v1.0 - Routes - 20/03/2021 15:27:51
    const express               = require('express')
    const router                = express.Router()
    
    const validaToken           = require('../auth/verifyToken')
    const Bancos2GET            = require('../controllers/Bancos2/Bancos2GET')
    const Bancos2POST           = require('../controllers/Bancos2/Bancos2POST')
    const Bancos2PUT            = require('../controllers/Bancos2/Bancos2PUT')
    const Bancos2DELETE         = require('../controllers/Bancos2/Bancos2DELETE')
    
    router.get('/api/Bancos2'    , validaToken, Bancos2GET )
    router.post('/api/Bancos2'   , validaToken, Bancos2POST )
    router.put('/api/Bancos2'    , validaToken, Bancos2PUT )
    router.delete('/api/Bancos2' , validaToken, Bancos2DELETE )
    
    module.exports = routerBancos2
    