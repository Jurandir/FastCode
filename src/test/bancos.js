const sqlQuery = require('../database/PG/sqlQuery')


const TABLE_NAME = 'public.bancos'
const TABLE_ID   = 'id'

const DEFAULT = {
        id: 0 , 
        co_banco: '', 
        no_bancos: '', 
        no_site: '', 
    }

const Bancos = {
    table_name: TABLE_NAME,
    key: TABLE_ID,
    values: DEFAULT,
    fields: [
        {name: 'id'       , type: 'integer', len: 10, isnul: false, caption:'Id.'   , describe:'Identificador'  , fk:null},
        {name: 'co_banco' , type: 'varchar', len: 10, isnul: false, caption:'Codígo', describe:'Codígo do banco', fk:null},
        {name: 'no_bancos', type: 'varchar', len: 60, isnul: false, caption:'Nome'  , describe:'Nome do banco'  , fk:null},
        {name: 'no_site'  , type: 'varchar', len: 60, isnul: false, caption:'Site'  , describe:'Site do banco'  , fk:null}
    ],
    insert: ((banco)=>insertBanco(banco)),
    update: ((banco)=>updateBanco(banco)),
    delete: ((id)=>deleteBanco(id)),
    select: ((query)=>selectBanco(query,TABLE_NAME,TABLE_ID)),
    seek:   ((id)=>seekBanco(id,TABLE_NAME,TABLE_ID)),
}

const insertBanco = async(banco) => {
     console.log('Insert:',banco)
}

const updateBanco = async(banco) => {
    console.log('Update:',banco)
}

const deleteBanco = async(id) => {
    let sql = `DELETE FROM ${table_name} WHERE ${key}=$1`
    console.log('Delete SQL:',sql)
    let resp = await sqlQuery(sql,[id])
    return resp
}

const selectBanco = async (query,table_name,key) => {
    let sql = `SELECT * FROM ${table_name} WHERE ${query}`
    console.log('Select SQL:',sql)
    let resp = await sqlQuery(sql,[])
    return resp
}

const seekBanco = async (id,table_name,key) => {
    let sql = `SELECT * FROM ${table_name} WHERE ${key}=$1`
    console.log('Seek SQL:',sql)
    let resp = await sqlQuery(sql,[id])
    return resp
}

module.exports = Bancos