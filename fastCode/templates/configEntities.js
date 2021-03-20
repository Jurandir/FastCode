const moment      = require('moment')
const fs          = require('fs');
const makeFolders = require('../helpers/makeFolders')
const createNewFile = require('../helpers/createNewFile')
const configDir  = './src/database/config' 
const configFile = 'entities.json' 
const _Entities = {
    dateUpdate: null,
    lastID: 0,
    list:[]
}
const _Entity = 
        { id: 0, 
          name: '', 
          description: '', 
          tableName: '', 
          unit : '', 
          allows_seek: true,
          allows_insert: true, 
          allows_select: true,
          allows_update: true,
          allows_delete: true
        }

moment.locale('pt-br')        

const configEntities = (tableName,unit) => {
    let Entities = {..._Entities}
    let Entity = {..._Entity}
    let wfile = `${configDir}/${configFile}`
    let txt

    function incluiUnit() {
        ++Entities.lastID
        Entities.dateUpdate = moment().format()
        Entity.id           = Entities.lastID
        Entity.name         = 'Register'+unit
        Entity.tableName    = tableName
        Entity.description  = 'Cadstro de '+tableName
        Entity.unit         = unit
        Entities.list.push(Entity)
        txt = JSON.stringify(Entities, null, "\t");
        createNewFile(configDir,configFile,txt) 
    }

    if(!fs.existsSync(wfile)){
       incluiUnit()
    } else {
        Entities = require(`../.${wfile}`)
        
        let SeekEntity = Entities.list.filter((item)=>{
            return (item.unit==unit) 
        })

        if(SeekEntity.length<1) {
            incluiUnit()
        }

    }
    
}

module.exports = configEntities