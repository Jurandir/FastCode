// https://www.luiztools.com.br/post/como-usar-nodejs-postgresql/?gclid=Cj0KCQiAs5eCBhCBARIsAEhk4r7shSKLfW69NczJ-AL7jZ5FJZtBINLH8OBO2uXOUPNCALvV8U9tJ50aAmPvEALw_wcB

async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        // postgres://usuario:senha@servidor:porta/banco
        connectionString: 'postgres://postgres:postgres@localhost:5432/adonisjs'
    });

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

module.exports = connect