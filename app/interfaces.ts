import { Aluno } from "./Models/Aluno.model";
import { Personal } from "./Models/Personal.model";

export interface attachPersonalToAlunoInterface {
    personal:Personal,
    aluno:Aluno
}