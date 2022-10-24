import connection  from "../database/connection";
import { Knex } from "knex";
export class AbstracRepository {
    public db:Knex

    constructor(){
        this.db = connection;
    }
}