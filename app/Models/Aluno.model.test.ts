import { Aluno } from "./Aluno.model"
import { users } from "../Repositories/data";
function main(){
    const alunoPersonal = {
        id:2,
        user_id:2,
        personal_id:null
    };
    const aluno = new Aluno(alunoPersonal);
    console.log(aluno.user())
}

main()