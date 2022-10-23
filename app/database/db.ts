import { User } from "../Models/User.model";
import { users, alunos } from "../Repositories/data";

import { Aluno } from "../Models/Aluno.model";
export const Database = {

    getUserById(id:Number): User | null 
    {
        return users.find( (user) => {
           return user.id() === id}
        ) ?? null; 
    }, 

    getAlunosFromPersonal(personal_id:Number | null):Aluno[] | []
    {
        return alunos.filter( aluno => aluno.personalId() === personal_id );
    }

}



