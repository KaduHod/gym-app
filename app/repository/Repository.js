import db from '../database/db.js';

export class Repository {
    constructor(){
        this.db = db();
    }

    all = async () => {
        return await this.db(this.table);
    }

    byId = async ({id}) => {
        return await this.db(this.table)
                        .where(`${this.table}.id`,id);
    }
}