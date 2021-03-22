
    // Fast Code v1.0 - Entities -  21/03/2021 23:54:15
    const methods  = require('../database/PG/methods')
    
    const TABLE_NAME = 'public.tweetes'
    const TABLE_ID   = ''
    const TABLE_SEQ  = ''
    const AUTO_ID    = false
    const DEBUG      = true
    
    const Tweetes = methods({
        table_name: TABLE_NAME,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        notes: '',
        debug: DEBUG,
        fields: [
    
        ]
    })
    
    module.exports = Tweetes
    