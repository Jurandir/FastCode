const fs = require('fs');
const path = require('path');

function mkPastas(dir) {
    let pastas = dir.split('/').slice(1)
    criaPasta(pastas)
    function criaPasta(pastas,dir) {
        if(!dir){ dir = path.join(__dirname, './') }
        let verifica  = path.join(dir , pastas[0] )
        let lista     = pastas.slice(1) 
        console.log('*',verifica,lista)
        if(!fs.existsSync(verifica)){ fs.mkdirSync(verifica) }
        if(lista.length>0) { criaPasta(lista,verifica) }
    } 
}

let dir = `./test/src/models`
mkPastas(dir)
