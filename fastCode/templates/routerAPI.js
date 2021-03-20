const moment = require('moment')

moment.locale('pt-br')

const routerAPI = async (unit) => { 
  
    const UNIT       = unit

    let txt
    let now = moment().format('DD/MM/YYYY HH:mm:ss')

    txt = `
    // Fast Code v1.0 - Routes - ${now}
    const express               = require('express')
    const router                = express.Router()
    
    const validaToken           = require('../auth/verifyToken')
    const ${UNIT}GET            = require('../controllers/${UNIT}/${UNIT}GET')
    const ${UNIT}POST           = require('../controllers/${UNIT}/${UNIT}POST')
    const ${UNIT}PUT            = require('../controllers/${UNIT}/${UNIT}PUT')
    const ${UNIT}DELETE         = require('../controllers/${UNIT}/${UNIT}DELETE')
    
    router.get('/api/${UNIT}'    , validaToken, ${UNIT}GET )
    router.post('/api/${UNIT}'   , validaToken, ${UNIT}POST )
    router.put('/api/${UNIT}'    , validaToken, ${UNIT}PUT )
    router.delete('/api/${UNIT}' , validaToken, ${UNIT}DELETE )
    
    module.exports = router${UNIT}
    `
    
return txt

}

module.exports = routerAPI
