
    // Fast Code v1.0 - Entities -  20/03/2021 15:43:44
    const methods  = require('../../database/PG/methods')
    
    const TABLE_NAME = 'public.users'
    const TABLE_ID   = 'id'
    const TABLE_SEQ  = ''
    const AUTO_ID    = true
    const DEBUG      = true
    
    const Users = methods({
        table_name: TABLE_NAME,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: "nextval('users_id_seq'::regclass)", caption:'Id', describe:'Tabela : id', fk:null},
       {name: 'username', type: 'varchar', len: 80, isnul: false, def: '', caption:'Username', describe:'Tabela : username', fk:null},
       {name: 'email', type: 'varchar', len: 254, isnul: false, def: '', caption:'Email', describe:'Tabela : email', fk:null},
       {name: 'password', type: 'varchar', len: 60, isnul: false, def: '', caption:'Password', describe:'Tabela : password', fk:null},
       {name: 'created_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Created_at', describe:'Tabela : created_at', fk:null},
       {name: 'updated_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Updated_at', describe:'Tabela : updated_at', fk:null},
        ]
    })
    
    module.exports = Users
    