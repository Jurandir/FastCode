const db = require('./db')

async function sqlQuery(sql,params) {
    const qry = await db()
    const res = await qry.query(sql,params)
    // console.log(res)
    return res.rows
}

module.exports = sqlQuery
