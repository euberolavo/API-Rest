const pg = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',     
    password: 'cancel12',
    database: 'SAS',
    port: 5432,
    ssl: false
};

const conexao = new pg.Client(config);

module.exports = conexao
