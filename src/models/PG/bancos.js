

const Defalut = {
        id: 0 , 
        co_banco: '', 
        no_bancos: '', 
        no_site: '', 
    }

const Bancos = {
    table_name: 'public.bancos',
    key: 'id',
    newObj: Defalut,
    fields: [
        {name: 'id'       , type: 'integer', len: 10, isnul: false, caption:'Id.'   , describe:'Identificador'  , fk:null},
        {name: 'co_banco' , type: 'varchar', len: 10, isnul: false, caption:'Codígo', describe:'Codígo do banco', fk:null},
        {name: 'no_bancos', type: 'varchar', len: 60, isnul: false, caption:'Nome'  , describe:'Nome do banco'  , fk:null},
        {name: 'no_site'  , type: 'varchar', len: 60, isnul: false, caption:'Site'  , describe:'Site do banco'  , fk:null}
    ],
    insert: ((banco)=>{insertBanco(banco)}),
    update: ((banco)=>{updateBanco(banco)}),
    delete: ((id)=>{deleteBanco(id)}),
    select: ((id)=>{selectBanco(id)})
}

const insertBanco = (banco) => {
     console.log('Insert:',banco)
}

const updateBanco = (banco) => {
    console.log('Update:',banco)
}

const deleteBanco = (params) => {
    let { id } = params
    if(!id) { id = params }

    console.log('Delete',id)
}

const selectBanco = (params) => {
    let { id } = params
    if(!id) { id = params }

    console.log('Select:',id)
}

module.exports = Bancos