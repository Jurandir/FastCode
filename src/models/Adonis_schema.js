
    // Fast Code v1.0 - Entities -  21/03/2021 10:40:51
    const methods  = require('../database/PG/methods')
    
    const TABLE_NAME = 'public.adonis_schema'
    const TABLE_ID   = 'id'
    const TABLE_SEQ  = ''
    const AUTO_ID    = true
    const DEBUG      = true
    
    const Adonis_schema = methods({
        table_name: TABLE_NAME,
        key: TABLE_ID,
        sequence: TABLE_SEQ,
        autoIncrement: AUTO_ID,
        debug: DEBUG,
        fields: [
    
       {name: 'id', type: 'int4', len: 0, isnul: false, def: "nextval('adonis_schema_id_seq'::regclass)", caption:'Id', describe:'Tabela : id', fk:null},
       {name: 'name', type: 'varchar', len: 255, isnul: true, def: '', caption:'Name', describe:'Tabela : name', fk:null},
       {name: 'batch', type: 'int4', len: 0, isnul: true, def: 0, caption:'Batch', describe:'Tabela : batch', fk:null},
       {name: 'migration_time', type: 'timestamptz', len: 0, isnul: true, def: "now()", caption:'Migration_time', describe:'Tabela : migration_time', fk:null},
        ]
    })
    
    module.exports = Adonis_schema
    