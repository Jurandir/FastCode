
// Fast Code v1.0 - List API - 21/03/2021 23:54:15
const express = require('express')
const router  = express.Router()

const tweetsUSE = require('./Tweets') 
const bancos2USE = require('./Bancos2') 
const bancosUSE = require('./Bancos') 
const usersUSE = require('./Users') 
const tokensUSE = require('./Tokens') 
const adonis_schemaUSE = require('./Adonis_schema') 
const tweetesUSE = require('./Tweetes') 


router.use('/tweets', tweetsUSE ) 
router.use('/bancos2', bancos2USE ) 
router.use('/bancos', bancosUSE ) 
router.use('/users', usersUSE ) 
router.use('/tokens', tokensUSE ) 
router.use('/adonis_schema', adonis_schemaUSE ) 
router.use('/tweetes', tweetesUSE ) 


module.exports = router
