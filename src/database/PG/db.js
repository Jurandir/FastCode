// https://www.luiztools.com.br/post/como-usar-nodejs-postgresql/?gclid=Cj0KCQiAs5eCBhCBARIsAEhk4r7shSKLfW69NczJ-AL7jZ5FJZtBINLH8OBO2uXOUPNCALvV8U9tJ50aAmPvEALw_wcB

const moment = require('moment')

async function db() {
    if (global.connection) {
        console.log('Connection OK.')
        return global.connection
    }

    const { Pool } = require('pg');
    const pool = new Pool({
        // postgres://usuario:senha@servidor:porta/banco
        connectionString: 'postgres://postgres:postgres@localhost:5432/adonisjs'
    });

    //apenas testando a conexão
    global.connection = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await global.connection.query('SELECT NOW()');
    let now = moment(res.rows[0].now).format()
    console.log('Time Connection:',now);

    //guardando para usar sempre o mesmo
    
    return global.connection;
}



module.exports = db