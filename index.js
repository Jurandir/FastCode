const db     = require('./src/database/PG/db')
const app    = require('./src/api/server')
global.connection = db()

app()