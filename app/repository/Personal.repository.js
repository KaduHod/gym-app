import db from "../database/db.js";
import { Repository } from "./Repository.js";

export class PersonalRepository extends Repository {
    constructor(){
        super();
        this.db = db;
        this.table = 'Personal';
    }

    all = async () => {
        return await this.db
                        .select('')
                        .from(this.table)
                        .innerJoin('Users', 'Users.id', 'Personal.user_id');
    }

    one = async ({PersonalId}) => {
        return await this.db
                        .select('nickname', 'celphone', 'email')
                        .from(this.table)
                        .innerJoin('Users', 'Users.id','Personal.user_id')
                        .where('Personal.id', PersonalId);
    }

    alunos = async ({PersonalId}) => {
        return await this.db
                        .select('*')
                        .from('Alunos')
                        .innerJoin('personal_aluno', 'personal_aluno.aluno_id', 'Alunos.id')
                        .innerJoin('Personal', 'Personal.id', 'personal_aluno.personal_id')
                        .innerJoin('Users', 'Users.id', 'Alunos.user_id')
                        .where('Personal.id', PersonalId);   
    }
}