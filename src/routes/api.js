// Fast Code v1.0 - List API - 09/04/2021 00:01:00
const express = require('express')
const router  = express.Router()

const list        = require('../../common/controllers/entitiesList')
const validaToken = require('../auth/verifyToken')

const bancos2USE = require('./Bancos2') 
const tweetsUSE = require('./Tweets') 
const tokensUSE = require('./Tokens') 


router.get('/list', validaToken, list)
router.use('/bancos2', bancos2USE ) 
router.use('/tweets', tweetsUSE ) 
router.use('/tokens', tokensUSE ) 


module.exports = router
