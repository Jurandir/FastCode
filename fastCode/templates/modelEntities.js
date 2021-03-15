const dataStructure = require('../dataSearches/dataStructurePG')

const modelEntities = async () => { 

    const UNIT       = 'bancos'
    const TABLE      = 'bancos'
    const SCHEMA     = 'public'

    let txt

    await dataStructure(TABLE,SCHEMA).then(({dbColumns,keys,inc })=> {

        const TABLE_ID   = keys.join()
        const TABLE_SEQ  = ''
        const AUTO_ID    = inc
        const DEBUG      = true
        const FIELDS     = makeColumns(dbColumns)
        
    txt = `
    const methods  = require('../../database/PG/methods')
    
    const TABLE_NAME = '${SCHEMA}.${TABLE}'
    const TABLE_ID   = '${TABLE_ID}'
    const TABLE_SEQ  = '${TABLE_SEQ}'
    const AUTO_ID    = ${AUTO_ID}
    const DEBUG      = ${DEBUG}
    
    const Bancos = methods({
        table_name: TABLE_NAME,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        debug: DEBUG,
        fields: [
    ${FIELDS}
        ]
    })
    
    module.exports = ${UNIT}
    `
    

    })


function makeColumns (dbColumns) {
    let fields = ''
    for ( let attributes of dbColumns ) {
        fields = fields + makeAttributes(attributes)
    }
    return fields
}

function makeAttributes ({name, type, len, isnul, def, caption, describe, fk}) {
    return `\t {name: '${name}', type: '${type}', len: ${len}, isnul: ${isnul}, def: ${def}, caption:'${caption}', describe:'${describe}', fk:${fk}}, \n`
}

console.log('TXT:',txt)
process.exit(0)

}

module.exports = modelEntities
