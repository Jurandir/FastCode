
    // Fast Code v1.0 - Routes - 20/03/2021 15:43:44
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const UsersGET            = require('../controllers/Users/UsersGET')
    const UsersPOST           = require('../controllers/Users/UsersPOST')
    const UsersPUT            = require('../controllers/Users/UsersPUT')
    const UsersDELETE         = require('../controllers/Users/UsersDELETE')
    
    router.get('/api/Users'    , validaToken, UsersGET )
    router.post('/api/Users'   , validaToken, UsersPOST )
    router.put('/api/Users'    , validaToken, UsersPUT )
    router.delete('/api/Users' , validaToken, UsersDELETE )
    
    module.exports = routerUsers
    