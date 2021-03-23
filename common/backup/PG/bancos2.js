const methods  = require('../../database/PG/methods')

const TABLE_NAME = 'public.bancos2'
const TABLE_ID   = 'id'
const TABLE_SEQ  = 'bancos2_id'
const AUTO_ID    = false
const DEBUG      = true


const Bancos2 = methods({
    table_name: TABLE_NAME,
    key: TABLE_ID,
    sequence: TABLE_SEQ,
    autoIncrement: AUTO_ID,
    debug: DEBUG,
    fields: [
        {name: 'id'       , type: 'integer', len: 10, isnul: false, def:  800, caption:'Id.'   , describe:'Identificador'  , fk:null},
        {name: 'co_banco' , type: 'varchar', len: 10, isnul: false, def: '800', caption:'Codígo', describe:'Codígo do banco', fk:null},
        {name: 'no_bancos', type: 'varchar', len: 60, isnul: false, def: 'Teste de Inclusão', caption:'Nome'  , describe:'Nome do banco'  , fk:null},
        {name: 'no_site'  , type: 'varchar', len: 60, isnul: false, def: 'http://www.bb.com.br', caption:'Site'  , describe:'Site do banco'  , fk:null}
    ]
})

module.exports = Bancos2
