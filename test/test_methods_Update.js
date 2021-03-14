const bancos2 = require('../src/models/PG/bancos2');

bancos2.Debug(false);

( async () => {

    let LastID = await bancos2.LastID()

    console.log('Last ID',LastID)

    bancos2.Update(LastID,{no_bancos: `TESTE UPDATE ID:${LastID}`}).then(ret=>{
        console.log('Response :',ret.command,ret.rowCount)
        process.exit(0)
    })


})()

