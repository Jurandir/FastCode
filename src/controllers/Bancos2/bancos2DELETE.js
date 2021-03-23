// Fast Code v1.0 - Entity API DELETE - 22/03/2021 23:35:12
const Bancos2 = require('../../models/Bancos2')
const MSG = require('../../../common/helpers/message')

async function bancos2DELETE ( req, res ) {
    let { tagId }     = req.params
    let idMsg         = 4

    let retorno = {
        success: true,
        id: tagId,
        message: '',
        rowCount: 0,
        code: 0,
        err: ''
    }
    
    Bancos2.Debug(false)

    Bancos2.Delete(tagId).then(ret=>{
        idMsg            = ret.rowCount ? 4 : 8
        msg              = MSG(idMsg)
        retorno.code     = msg.code
        retorno.success  = msg.success
        retorno.id       = ret.ID
        retorno.message  = msg.message
        retorno.rowCount = ret.rowCount

        res.json(retorno).status(retorno.code || 202)

    }).catch((err)=>{
        idMsg            = 2
        msg              = MSG(idMsg)
        retorno.code     = msg.code
        retorno.success  = msg.success
        retorno.message  = msg.message
        retorno.err      = err.message
        retorno.rowCount = -1

        res.json(retorno).status(retorno.code || 500) 
    })

}

module.exports = bancos2DELETE