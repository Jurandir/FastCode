// Fast Code v1.0 - Entity API GET Types - 21/03/2021 23:54:15
const Tweetes = require('../../models/Tweetes')

async function tweetesGETtypes ( req, res ) {
    let idMsg       = 0
        
    let retorno = {
        success: true,
        message: 'Tipos de dados',
        table: Tweetes.Model.table_name,
        key: Tweetes.Model.key,
        autoIncrement: Tweetes.Model.autoIncrement,
        types: Tweetes.FieldsTypes,
        defaults: Tweetes.Defaults,
        notes: Tweetes.Model.notes
    }
    
    res.json(retorno).status(200)

}

module.exports = tweetesGETtypes
