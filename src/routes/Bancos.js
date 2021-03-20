
    // Fast Code v1.0 - Routes - 20/03/2021 15:30:04
    const express               = require('express')
    const router                = express.Router()
    
    const validaToken           = require('../auth/verifyToken')
    const BancosGET            = require('../controllers/Bancos/BancosGET')
    const BancosPOST           = require('../controllers/Bancos/BancosPOST')
    const BancosPUT            = require('../controllers/Bancos/BancosPUT')
    const BancosDELETE         = require('../controllers/Bancos/BancosDELETE')
    
    router.get('/api/Bancos'    , validaToken, BancosGET )
    router.post('/api/Bancos'   , validaToken, BancosPOST )
    router.put('/api/Bancos'    , validaToken, BancosPUT )
    router.delete('/api/Bancos' , validaToken, BancosDELETE )
    
    module.exports = routerBancos
    