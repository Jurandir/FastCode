const db     = require('./src/database/PG/db')
const bancos2 = require('./src/models/PG/bancos2')

global.connection = db()

//let a = {...bancos.newObj};

//a.id = 88
//a.co_banco = '001'
//a.no_bancos = 'Bco Brasil'
//a.no_site = 'www.bb.com.br'

//bancos.insert(a)

//bancos.update(a)

//bancos.delete(1)

bancos2.Seek(88).then((ret)=>{
    console.log(ret)
})

bancos2.Select('id=99').then((ret)=>{
    console.log(ret)
})

let d = bancos2.Defaults
console.log(d)


console.log('====>',global.connection)

