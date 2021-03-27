// Fast Code v1.0 - Entity API GET Types - 26/03/2021 23:21:35
const Bancos2 = require('../../models/Bancos2')

async function bancos2GETtypes ( req, res ) {
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: 'Tipos de dados',
        table: Bancos2.Model.table_name,
        key: Bancos2.Model.key,
        autoIncrement: Bancos2.Model.autoIncrement,
        types: Bancos2.FieldsTypes,
        defaults: Bancos2.Defaults,
        captions: Bancos2.Captions,
        notes: Bancos2.Model.notes
    }
    
    res.json(retorno).status(200)

}

module.exports = bancos2GETtypes
