const db       = require('./db')

async function sqlPaginate(sql,sqlCount,pg) {
    const qry = await db()
    let res = {
        rows: [],
        Pages: 0,
        Page: pg._Page,
        PageSize: pg._PageLength,
        Lines: 0,
        Total: 0,
    }
    let new_sql = sql + pg._sql

    console.log('sqlPaginate:',pg,new_sql)

    const count = await qry.query(sqlCount,[])
    res.Total  = parseInt(count.rows[0].qtde || 0)

    const data  = await qry.query(new_sql,[])

    res.rows       = data.rows
    res.Lines   = data.rowCount

    res.Pages = Math.trunc(res.Total / res.PageSize)+1

    return res
}

module.exports = sqlPaginate
