import db from '../database/db.js';

export class Repository {
    constructor(){
        this.db = db();
    }
}