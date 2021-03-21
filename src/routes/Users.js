
    // Fast Code v1.0 - Routes - 21/03/2021 10:48:27
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const usersGET            = require('../controllers/users/usersGET')
    //const usersPOST           = require('../controllers/users/usersPOST')
    //const usersPUT            = require('../controllers/users/usersPUT')
    //const usersDELETE         = require('../controllers/users/usersDELETE')
    
    router.get('/'    , validaToken, usersGET )
    //router.post('/'   , validaToken, usersPOST )
    //router.put('/'    , validaToken, usersPUT )
    //router.delete('/' , validaToken, usersDELETE )
    
    module.exports = router
    