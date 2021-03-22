// Fast Code v1.0 - Entity API DELETE - 21/03/2021 23:54:15
const Tweetes = require('../../models/Tweetes')
const MSG = require('../../helpers/message')

async function tweetesDELETE ( req, res ) {
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
    
    Tweetes.Debug(false)

    Tweetes.Delete(tagId).then(ret=>{
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

module.exports = tweetesDELETE
