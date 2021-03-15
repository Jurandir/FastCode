const sqlPaginate   = require('./sqlPaginate')
const sqlQuery      = require('./sqlQuery')
const sqlExec       = require('./sqlExec')
const paginate      = require('../../../config/paginate') 



const methods = (dataModel) => {

    let debug         = dataModel.debug
    let table_name    = dataModel.table_name
    let key           = dataModel.key
    let sequence      = dataModel.sequence
    let autoIncrement = dataModel.autoIncrement
    let defaultID     = autoIncrement ? '' : sequence ? `nextval('${sequence}'::regclass)` : ''

    const setDebug = (flag) => {
        dataModel.debug = flag
        debug           = dataModel.debug
    }

    const disrupt = (obj) =>{
        let virgula       = ''
        let attributes    = ''
        let template      = ''
        let templateSEQ   = ''
        let setUpdate     = ''
        let values        = []
        let valuesSEQ     = []
        for ( let prop in obj ) { 
            let value = obj[prop]
            values.push( value )
            if(prop!==key) {
                valuesSEQ.push( value )
            }    
            let temp      = '$'+ values.length
            let tempSEQ   = prop==key ? defaultID : '$'+ valuesSEQ.length
            let updt      = prop+' = '+ temp
            attributes    = attributes  + virgula + prop
            template      = template    + virgula + temp
            templateSEQ   = templateSEQ + virgula + tempSEQ
            setUpdate     = setUpdate   + virgula + updt
            virgula       = ', '
        } 
        return {attributes,template,templateSEQ,setUpdate,values,valuesSEQ}
    }

    const execLastID = async () => {
        let sql = `SELECT max(${key}) ${key} FROM ${table_name} `
        if(debug) { console.log('LastID SQL:', sql) }
        let resp = await sqlQuery(sql, [])
        let id   = (resp.rows[0][key] || -1 )
        return id
    }

    const execInsert = async (line) => {
        if(defaultID){
            line[key] = defaultID
        } else 
        if (autoIncrement) {
            delete line[key]
        }
        let {attributes,template,templateSEQ,values,valuesSEQ} = disrupt(line)
        let newValues   = defaultID ? valuesSEQ   : values
        let newTemplate = defaultID ? templateSEQ : template
        let sql         = `INSERT INTO ${table_name} (${attributes}) VALUES (${newTemplate}) RETURNING * `
        if(debug) { console.log('Insert SQL:', sql,newValues) }
        let resp = await sqlExec(sql, newValues)
        resp.ID = resp.rowCount ? resp.rows[0][key] : -1 
        if(debug) { console.log('Response DB:', resp) }
        return resp
    }

    const execUpdate = async (id,line) => {
        delete line[key]
        let {setUpdate,values} = disrupt(line)
        let newValues = [...values,id]
        let ref = newValues.length
        let sql = `UPDATE ${table_name} SET ${setUpdate} WHERE ${key}=$`+ref
        if(debug) { console.log('Update SQL:', sql,newValues) }
        let resp = await sqlExec(sql, newValues)
        if(debug) { console.log('Response DB:', resp) }
        return resp
    }

    const execDelete = async (id) => {
        let sql = `DELETE FROM ${table_name} WHERE ${key}=$1`
        if(debug) { console.log('Delete SQL:', sql) }
        let resp = await sqlExec(sql, [id])
        if(debug) { console.log('Response DB:', resp) }
        return resp
    }

    const execSelect = async (query) => {
        let sql = `SELECT * FROM ${table_name}` + ( query ? ` WHERE ${query}` : '')
        if(debug) { console.log('Select SQL:', sql) }
        let resp = await sqlQuery(sql, [])
        if(debug) { console.log('Response DB:', resp) }
        return resp
    }

    const execPage = async (query,Page,PageSize) => {
        let sql      = `SELECT * FROM ${table_name} ` + ( query ? `WHERE ${query}` : '')
        let sqlCount = `SELECT count(*) qtde FROM ${table_name} ` + ( query ? `WHERE ${query}` : '')
        if(debug) { console.log('Page SQL:', sql) }
        let pg = paginate(Page,PageSize)
        if(debug) { console.log('PG',pg) }
        let resp = await sqlPaginate(sql,sqlCount,pg,debug)
        if(debug) { console.log('Response DB:', resp) }
        return resp
    }

    const execSeek = async (id) => {
        let sql = `SELECT * FROM ${table_name} WHERE ${key}=$1`
        if(debug) { console.log('Seek SQL:', sql) }
        let resp = await sqlQuery(sql, [id])
        if(debug) { console.log('Response DB:', resp) }
        return resp
    }

    const valuesDefaults = () => {
        let resp = {} 
        dataModel.fields.map((itn,idx)=>{
            resp[itn.name] = itn.def
        })
        return resp
    }

    return {
        Model: dataModel,
        Debug: setDebug,
        Insert: execInsert,
        Update: execUpdate,
        Delete: execDelete,
        Select: execSelect,
        Page: execPage,
        Seek: execSeek,
        Disrupt: disrupt,
        LastID: execLastID,
        Defaults: valuesDefaults() 
    }
}

module.exports = methods