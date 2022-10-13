import knex from 'knex';
import * as dotenv from 'dotenv';
dotenv.config()

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE
} = process.env;

const connection = () => {
    if(global.connection && global.connection.state !== 'disconnected') return global.connection;

    const connection = knex({
        client: 'mysql2',
        connection : {
            host : 'localhost' ?? DB_HOST,
            port : DB_PORT,
            user : DB_USER,
            password : DB_PASSWORD,
            database : DB_DATABASE
        }
    });
    global.connection = connection;
    return connection;
}

export default connection();