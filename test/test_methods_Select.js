const bancos2 = require('../src/models/PG/bancos2');

bancos2.Debug(true);

( async () => {

    let condition  = "co_banco = '800' "

    bancos2.Select(condition).then(ret=>{
        console.log('Response :',ret.command,ret.rowCount)
        console.log('Dados :',ret.rows)
        process.exit(0)
    })


})()

