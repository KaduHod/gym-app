import db from "../database/db.js";
import { Repository } from "./Repository.js";

export class PersonalRepository extends Repository {
    constructor(){
        super();
        this.db = db;
        this.table = 'Personal';
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