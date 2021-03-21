// Fast Code v1.0 - Entity API GET Page - 21/03/2021 12:52:56
const Bancos2 = require('../../models/Bancos2')
const MSG = require('../../helpers/message')

async function bancos2GETpage ( req, res ) {
    let { filter,page,size }  = req.query
    let condition   = filter ? filter : '' 
    let pagina      = page ? page : 1 
    let linhas      = size ? size : 50 
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: '',
        data: [],
        params: condition,
        page: pagina,
        size: linhas,
        code: 0,
        err: ''
    }
    
    Bancos2.Debug(false)

    Bancos2.Page(condition,pagina,linhas).then(ret=>{
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

module.exports = bancos2GETpage