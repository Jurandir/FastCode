const modelEntities  = require('../templates/modelEntities')
const routerAPI      = require('../templates/routerAPI')
const configEntities = require('../templates/configEntities')
const listAPI        = require('../templates/listAPI')
const entityApiGET   = require('../templates/entityApiGET')
const createNewFile  = require('../helpers/createNewFile')

// node .\fastCode\codeGenerators\entityModel.js --table tweets --schema public --unit Tweets --save --no-show

const model_DIR       = './src/models' 
const router_DIR      = './src/routes' 
const controllersDIR  = './src/controllers'
const test_DIR        = './test' 
const backup_DIR      = './backup' 


let ROTINE     = process.argv[1]
let NODE       = process.argv[0]
let TABLE      = null 
let SCHEMA     = null
let UNIT       = null
let SAVE       = false
let SHOW       = true

const entityModel = (params) => {
    let { ROTINE, NODE, TABLE, SCHEMA, UNIT, SAVE, SHOW } = params

    if(!TABLE) {
        console.log('Fast Code - Parâmetro "--table" obrigatório !!!') 
        process.exit(0)    
    }

    SCHEMA = SCHEMA ? SCHEMA : 'public'
    UNIT   = UNIT   ? UNIT : TABLE.charAt(0).toUpperCase() + TABLE.slice(1)
    
    if(SHOW) { console.log('NODE:',NODE) }
    if(SHOW) { console.log('ROTINE:',ROTINE) }

    configEntities(TABLE,UNIT)
   
    modelEntities(TABLE,SCHEMA,UNIT).then(txt=>{
        
        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(model_DIR,UNIT,txt) }
        
    })

    routerAPI(UNIT).then(txt=>{
        
        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(router_DIR,UNIT,txt) }
        
    })

    listAPI().then((txt)=>{

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(router_DIR,'api',txt) }

    })

    entityApiGET(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'GET'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

}

process.argv.forEach(function (val, index, array) {
    if(val=='--table'  ) { TABLE  = array[index+1] } else 
    if(val=='--schema' ) { SCHEMA = array[index+1] } else 
    if(val=='--unit'   ) { UNIT   = array[index+1] } else
    if(val=='--save'   ) { SAVE   = true  } else 
    if(val=='--no-show') { SHOW   = false } 
    
})

let values = { ROTINE, NODE, TABLE, SCHEMA, UNIT, SAVE, SHOW }

entityModel(values)
