
// Fast Code v1.0 - List API - 26/03/2021 23:21:38
const express = require('express')
const router  = express.Router()

const bancos2USE = require('./Bancos2') 


router.use('/bancos2', bancos2USE ) 


module.exports = router
