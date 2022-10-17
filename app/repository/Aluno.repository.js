import db from "../database/db.js";
import { Repository } from "./Repository.js";

export class AlunoRepository extends Repository {
    constructor(){
        super();
        this.db = db;
        this.table = 'alunos';
    }

    quantityOfRegisters = async () => {
        let total = await db.raw(`select count(*) from ${this.table}`)
        total = Object.values(total[0][0])[0];
        return total
    };
    
}