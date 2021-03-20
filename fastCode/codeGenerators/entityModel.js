const modelEntities = require('../templates/modelEntities')

// node .\fastCode\codeGenerators\entityModel.js --table tweets --schema public --unit Tweets --save --no-show

const model_DIR   = '../../src/models' 
const test_DIR    = '../../test' 
const backup_DIR  = '../../backup' 

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
    UNIT   = UNIT   ? UNIT : TABLE
    
    console.log('NODE:',NODE)
    console.log('ROTINE:',ROTINE)
   
    modelEntities(TABLE,SCHEMA,UNIT).then(txt=>{
        if(SHOW) { console.log(txt) }
        process.exit(0)    
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
