
    // Fast Code v1.0 - Routes - 20/03/2021 19:34:54
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const tweetsGET            = require('../controllers/tweets/tweetsGET')
    //const tweetsPOST           = require('../controllers/tweets/tweetsPOST')
    //const tweetsPUT            = require('../controllers/tweets/tweetsPUT')
    //const tweetsDELETE         = require('../controllers/tweets/tweetsDELETE')
    
    router.get('/'       , validaToken, tweetsGET )
    router.get('/:id'    , validaToken, tweetsGET )
    //router.post('/'   , validaToken, tweetsPOST )
    //router.put('/'    , validaToken, tweetsPUT )
    //router.delete('/' , validaToken, tweetsDELETE )
    
    module.exports = router
    