import { Aluno } from "./Models/Aluno.model";
import { Personal } from "./Models/Personal.model";

export interface alunoPersonalInterface {
    personal:Personal,
    aluno:Aluno
}
