const express                 = require('express')
const router                  = express.Router()

const validaToken             = require('../auth/verifyToken')
const bancosGET               = require('../controllers/Bancos/bancosGET')
const bancosPOST              = require('../controllers/Bancos/bancosPOST')
const bancosPUT               = require('../controllers/Bancos/bancosPUT')
const bancosDELETE            = require('../controllers/Bancos/bancosDELETE')

router.get('/api/bancos'      , validaToken, bancosGET )
router.post('/api/bancos'     , validaToken, bancosPOST )
router.put('/api/bancos'      , validaToken, bancosPUT )
router.delete('/api/bancos'   , validaToken, bancosDELETE )

module.exports = router