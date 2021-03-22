// Fast Code v1.0 - Entity API GET Seek - 21/03/2021 23:34:11
const Bancos2 = require('../../models/Bancos2')
const MSG = require('../../helpers/message')

async function bancos2GETseek ( req, res ) {
    let { tagId }   = req.params
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: '',
        data: [],
        params: tagId,
        code: 0,
        err: ''
    }
    
    Bancos2.Debug(false)

    Bancos2.Seek(tagId).then(ret=>{
        idMsg           =  ret.rows.length>0 ? 1 : 0
        msg             = MSG(idMsg)
        retorno.code    = msg.code
        retorno.success = msg.success
        retorno.data    = ret.rows
        retorno.message = msg.message

        res.json(retorno).status(retorno.code || 200)

    }).catch((err)=>{
        idMsg           = 2
        msg             = MSG(idMsg)
        retorno.code    = msg.code
        retorno.success = msg.success
        retorno.message = msg.message
        retorno.err     = err.message

        res.json(retorno).status(retorno.code || 500) 
    })
}

module.exports = bancos2GETseek
