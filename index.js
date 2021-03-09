
//const db = require('./src/database/PG/db')

//let x = db().then((ret)=>{
//    console.log(global.connection)
//})


const bancos = require('./src/models/PG/bancos')


let a = {...bancos.newObj};

a.id = 999
a.co_banco = '001'
a.no_bancos = 'Bco Brasil'
a.no_site = 'www.bb.com.br'

bancos.insert(a)

bancos.update(a)

bancos.delete(1)

bancos.select(a)
