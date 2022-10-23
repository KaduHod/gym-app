import { Personal } from "./Personal.model"
import { Aluno } from "./Aluno.model";
import { users, alunos } from "../Repositories/data";
function main(){

    const propsPersonal = {
        id:1,
        user_id:1
    };

    const [aluno, aluno2] = alunos

    
//   
    const personal = new Personal(propsPersonal);

    aluno.setPersonal(personal.id())
    aluno2.setPersonal(personal.id())


    console.log(personal.alunos())
   
    // const aluno = new Aluno({
        // id:2,
        // user_id:2,
        // personal_id:null
    // });
    // const aluno2 = new Aluno({
        // id:3,
        // user_id:3,
        // personal_id:null
    // });
// 
    // aluno.setPersonal(1);
    // aluno2.setPersonal(2);

}

main()