
    // Fast Code v1.0 - Routes - 21/03/2021 10:40:52
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const adonis_schemaGET            = require('../controllers/adonis_schema/adonis_schemaGET')
    //const adonis_schemaPOST           = require('../controllers/adonis_schema/adonis_schemaPOST')
    //const adonis_schemaPUT            = require('../controllers/adonis_schema/adonis_schemaPUT')
    //const adonis_schemaDELETE         = require('../controllers/adonis_schema/adonis_schemaDELETE')
    
    router.get('/'    , validaToken, adonis_schemaGET )
    //router.post('/'   , validaToken, adonis_schemaPOST )
    //router.put('/'    , validaToken, adonis_schemaPUT )
    //router.delete('/' , validaToken, adonis_schemaDELETE )
    
    module.exports = router
    