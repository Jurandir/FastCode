
    // Fast Code v1.0 - 19/03/2021 23:09:55
    const methods  = require('../../database/PG/methods')
    
    const TABLE_NAME = 'public.tweets'
    const TABLE_ID   = 'id'
    const TABLE_SEQ  = ''
    const AUTO_ID    = true
    const DEBUG      = true
    
    const Tweets = methods({
        table_name: TABLE_NAME,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: "nextval('tweets_id_seq'::regclass)", caption:'Id', describe:'Tabela : id', fk:null},
       {name: 'user_id', type: 'int4', len: 0, isnul: false, def: 0, caption:'User_id', describe:'Tabela : user_id', fk:null},
       {name: 'content', type: 'varchar', len: 240, isnul: false, def: '', caption:'Content', describe:'Tabela : content', fk:null},
       {name: 'created_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Created_at', describe:'Tabela : created_at', fk:null},
       {name: 'updated_at', type: 'timestamptz', len: 0, isnul: true, def: null, caption:'Updated_at', describe:'Tabela : updated_at', fk:null},
        ]
    })
    
    module.exports = Tweets
    