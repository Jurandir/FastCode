const db     = require('./src/database/PG/db')
const bancos  = require('./src/models/PG/bancos')
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

/*
bancos.Seek(88).then((ret)=>{
    console.log(ret)
})

bancos2.Select('id=99').then((ret)=>{
    console.log(ret)
})

let d = bancos2.Defaults
console.log('1',d)

*/


//let q = bancos2.Defaults
//console.log('2',q)


//console.log('====>',global.connection)


//let m = bancos2.Disrupt(q)

//let z = bancos2.Insert(q)


//console.log('Disrupt',m)


//bancos.Page('',12,15).then(z=>{
//    console.log('Page',z)
//    process.exit(0)
//
//})

bancos2.Update(800,{no_bancos:"teste de update OK."}).then(ret=>{
    console.log('Update',ret)
    process.exit(0)

})