// Fast Code v1.0 - Entity API GET Page - 03/04/2021 21:59:01
const Tweets = require('../../models/Tweets')
const MSG = require('../../../common/helpers/message')

async function tweetsGETpage ( req, res ) {
    let { filter,page,size }  = req.query
    let condition   = filter ? filter : '' 
    let pagina      = page ? Number.parseInt(page) : 1 
    let linhas      = size ? Number.parseInt(size) : 50 
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
    
    Tweets.Debug(false)

    Tweets.Page(condition,pagina,linhas).then(ret=>{
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

module.exports = tweetsGETpage
