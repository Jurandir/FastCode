
    // Fast Code v1.0 - Routes - 20/03/2021 19:14:52
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const tokensGET            = require('../controllers/tokens/tokensGET')
    const tokensPOST           = require('../controllers/tokens/tokensPOST')
    const tokensPUT            = require('../controllers/tokens/tokensPUT')
    const tokensDELETE         = require('../controllers/tokens/tokensDELETE')
    
    router.get('/'    , validaToken, tokensGET )
    router.post('/'   , validaToken, tokensPOST )
    router.put('/'    , validaToken, tokensPUT )
    router.delete('/' , validaToken, tokensDELETE )
    
    module.exports = router
    