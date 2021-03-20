
// Fast Code v1.0 - List API - 20/03/2021 19:34:54
const express = require('express')
const router  = express.Router()

const tweetsUSE = require('./Tweets') 


router.use('/tweets', tweetsUSE ) 


module.exports = router
