
    // Fast Code v1.0 - Entities -  21/03/2021 11:41:33
    const methods  = require('../database/PG/methods')
    
    const TABLE_NAME = 'public.bancos'
    const TABLE_ID   = 'id'
    const TABLE_SEQ  = ''
    const AUTO_ID    = false
    const DEBUG      = true
    
    const Bancos = methods({
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
    
    module.exports = Bancos
    