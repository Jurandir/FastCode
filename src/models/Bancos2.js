
    // Fast Code v1.0 - Entities -  04/04/2021 00:26:34
    const methods  = require('../../common/database/methods')
    
    const TABLE_NAME  = 'public.bancos2'
    const TABLE_TITLE = 'Cadastro de bancos2'
    const TABLE_ID    = 'id'
    const TABLE_SEQ   = ''
    const AUTO_ID     = false
    const DEBUG       = true
    
    const Bancos2 = methods({
        table_name: TABLE_NAME,
        title: TABLE_TITLE,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        notes: '',
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: 0, caption:'Id', describe:'Tabela : id', fk:null},
       {name: 'co_banco', type: 'varchar', len: 10, isnul: true, def: '', caption:'Co_banco', describe:'Tabela : co_banco', fk:null},
       {name: 'no_bancos', type: 'varchar', len: 60, isnul: true, def: '', caption:'No_bancos', describe:'Tabela : no_bancos', fk:null},
       {name: 'no_site', type: 'varchar', len: 60, isnul: true, def: '', caption:'No_site', describe:'Tabela : no_site', fk:null},
       {name: 'dt_contato', type: 'timestamp', len: 0, isnul: true, def: null, caption:'Dt_contato', describe:'Tabela : dt_contato', fk:null},
       {name: 'vl_limite', type: 'numeric', len: 0, isnul: true, def: null, caption:'Vl_limite', describe:'Tabela : vl_limite', fk:null},
        ]
    })
    
    module.exports = Bancos2
    