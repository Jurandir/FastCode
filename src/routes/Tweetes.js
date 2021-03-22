
    // Fast Code v1.0 - Routes - 21/03/2021 23:54:15
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const tweetesGET        = require('../controllers/tweetes/tweetesGET')
    const tweetesGETpage    = require('../controllers/tweetes/tweetesGETpage')
    const tweetesGETseek    = require('../controllers/tweetes/tweetesGETseek')
    const tweetesGETtypes   = require('../controllers/tweetes/tweetesGETtypes')
    const tweetesPOST       = require('../controllers/tweetes/tweetesPOST')
    const tweetesPUT        = require('../controllers/tweetes/tweetesPUT')
    const tweetesDELETE     = require('../controllers/tweetes/tweetesDELETE')
    
    router.get('/'          , validaToken, tweetesGET )
    router.get('/page'      , validaToken, tweetesGETpage )
    router.get('/types'     , validaToken, tweetesGETtypes )
    router.get('/:tagId'    , validaToken, tweetesGETseek )
    router.post('/'         , validaToken, tweetesPOST )
    router.put('/:tagId'    , validaToken, tweetesPUT )
    router.patch('/:tagId'  , validaToken, tweetesPUT )
    router.delete('/:tagId' , validaToken, tweetesDELETE )
    
    module.exports = router
    