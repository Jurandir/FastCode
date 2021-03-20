
    // Fast Code v1.0 - Entities -  20/03/2021 15:27:51
    const methods  = require('../../database/PG/methods')
    
    const TABLE_NAME = 'public.bancos2'
    const TABLE_ID   = 'id'
    const TABLE_SEQ  = ''
    const AUTO_ID    = false
    const DEBUG      = true
    
    const Bancos2 = methods({
        table_name: TABLE_NAME,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: 0, caption:'Id', describe:'Tabela : id', fk:null},
       {name: 'co_banco', type: 'varchar', len: 10, isnul: true, def: '', caption:'Co_banco', describe:'Tabela : co_banco', fk:null},
       {name: 'no_bancos', type: 'varchar', len: 60, isnul: true, def: '', caption:'No_bancos', describe:'Tabela : no_bancos', fk:null},
       {name: 'no_site', type: 'varchar', len: 60, isnul: true, def: '', caption:'No_site', describe:'Tabela : no_site', fk:null},
        ]
    })
    
    module.exports = Bancos2
    