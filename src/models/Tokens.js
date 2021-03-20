
    // Fast Code v1.0 - Entities -  20/03/2021 19:14:52
    const methods  = require('../database/PG/methods')
    
    const TABLE_NAME = 'public.tokens'
    const TABLE_ID   = 'id'
    const TABLE_SEQ  = ''
    const AUTO_ID    = true
    const DEBUG      = true
    
    const Tokens = methods({
        table_name: TABLE_NAME,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: "nextval('tokens_id_seq'::regclass)", caption:'Id', describe:'Tabela : id', fk:null},
       {name: 'user_id', type: 'int4', len: 0, isnul: true, def: 0, caption:'User_id', describe:'Tabela : user_id', fk:null},
       {name: 'token', type: 'varchar', len: 255, isnul: false, def: '', caption:'Token', describe:'Tabela : token', fk:null},
       {name: 'type', type: 'varchar', len: 80, isnul: false, def: '', caption:'Type', describe:'Tabela : type', fk:null},
       {name: 'is_revoked', type: 'bool', len: 0, isnul: true, def: "false", caption:'Is_revoked', describe:'Tabela : is_revoked', fk:null},
       {name: 'created_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Created_at', describe:'Tabela : created_at', fk:null},
       {name: 'updated_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Updated_at', describe:'Tabela : updated_at', fk:null},
        ]
    })
    
    module.exports = Tokens
    