const sqlQuery = require('../../database/PG/sqlQuery')


const methods = (dataModel) => {

    let table_name = dataModel.table_name
    let key        = dataModel.key

    const execInsert = async (dataModel) => {
        console.log('Insert:', dataModel)
        let resp = []
        return resp
    }

    const execUpdate = async (dataModel) => {
        console.log('Update:', dataModel)
        let resp = []
        return resp
    }

    const execDelete = async (id) => {
        let sql = `DELETE FROM ${table_name} WHERE ${key}=$1`
        console.log('Delete SQL:', sql)
        let resp = await sqlQuery(sql, [id])
        return resp
    }

    const execSelect = async (query) => {
        let sql = `SELECT * FROM ${table_name} WHERE ${query}`
        console.log('Select SQL:', sql)
        let resp = await sqlQuery(sql, [])
        return resp
    }

    const execSeek = async (id) => {
        let sql = `SELECT * FROM ${table_name} WHERE ${key}=$1`
        console.log('Seek SQL:', sql)
        let resp = await sqlQuery(sql, [id])
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
        Insert: execInsert,
        Update: execUpdate,
        Delete: execDelete,
        Select: execSelect,
        Seek: execSeek,
        Defaults: valuesDefaults() 
    }
}

module.exports = methods