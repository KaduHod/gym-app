import knex, { Knex } from 'knex';
import * as dotenv from 'dotenv';
import config from './conn.config'
dotenv.config()

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE
} = config;

export interface dbConnectionParams {
    host : String
    port : Number
    user : String
    password : String
    database : String
}
export interface clientParams {
    client:String
    connection:dbConnectionParams
}

var conn:null | any = null;

const connection = (): Knex => {
    if(conn && conn.state !== 'disconnected') return conn;

    
    const config : Knex.Config = {
        client: 'mysql2',
        connection : {
            host : DB_HOST,
            port : DB_PORT,
            user : DB_USER,
            password : DB_PASSWORD,
            database : DB_DATABASE
        }
    }
    const connection = knex(config);
    conn = connection;
    // console.log(await conn('users'))
    return conn;
}

export default connection();



