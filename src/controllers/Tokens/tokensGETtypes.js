// Fast Code v1.0 - Entity API GET Types - 21/03/2021 15:45:49
const Tokens = require('../../models/Tokens')

async function tokensGETtypes ( req, res ) {
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: 'Tipos de dados',
        table: Tokens.Model.table_name,
        key: Tokens.Model.key,
        types: Tokens.FieldsTypes,
        defaults: Tokens.Defaults,
        notes: Tokens.Model.notes
    }
    
    res.json(retorno).status(200)

}

module.exports = tokensGETtypes
