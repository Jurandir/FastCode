
    // Fast Code v1.0 - Routes - 21/03/2021 12:52:56
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const bancos2GET            = require('../controllers/bancos2/bancos2GET')
    const bancos2GETpage        = require('../controllers/bancos2/bancos2GETpage')
    const bancos2GETseek        = require('../controllers/bancos2/bancos2GETseek')
    //const bancos2POST           = require('../controllers/bancos2/bancos2POST')
    //const bancos2PUT            = require('../controllers/bancos2/bancos2PUT')
    //const bancos2DELETE         = require('../controllers/bancos2/bancos2DELETE')
    
    router.get('/'            , validaToken, bancos2GET )
    router.get('/page'        , validaToken, bancos2GETpage )
    router.get('/:tagId'      , validaToken, bancos2GETseek )
    //router.post('/'         , validaToken, bancos2POST )
    //router.put('/:tagId'    , validaToken, bancos2PUT )
    //router.delete('/:tagId' , validaToken, bancos2DELETE )
    
    module.exports = router
    