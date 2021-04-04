
// Fast Code v1.0 - List API - 04/04/2021 00:26:38
const express = require('express')
const router  = express.Router()

const bancos2USE = require('./Bancos2') 
const tweetsUSE = require('./Tweets') 


router.use('/bancos2', bancos2USE ) 
router.use('/tweets', tweetsUSE ) 


module.exports = router
