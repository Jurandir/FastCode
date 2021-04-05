// Fast Code v1.0 - Entity API GET Types - 04/04/2021 22:14:25
const Tokens = require('../../models/Tokens')

async function tokensGETtypes ( req, res ) {
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: 'Tipos de dados',
        title: Tokens.Model.title,
        table: Tokens.Model.table_name,
        key: Tokens.Model.key,
        autoIncrement: Tokens.Model.autoIncrement,
        types: Tokens.FieldsTypes,
        defaults: Tokens.Defaults,
        captions: Tokens.Captions,
        notes: Tokens.Model.notes
    }
    
    res.json(retorno).status(200)

}

module.exports = tokensGETtypes
