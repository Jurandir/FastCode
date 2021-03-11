const db     = require('./src/database/PG/db')
const bancos = require('./src/models/PG/bancos')

global.connection = db()

let a = {...bancos.newObj};

a.id = 88
a.co_banco = '001'
a.no_bancos = 'Bco Brasil'
a.no_site = 'www.bb.com.br'

//bancos.insert(a)

//bancos.update(a)

//bancos.delete(1)

bancos.seek(88).then((ret)=>{
    console.log(ret)
})

bancos.select('id=99').then((ret)=>{
    console.log(ret)
})

console.log('====>',global.connection)

