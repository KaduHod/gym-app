import { test, expect } from 'vitest'
import { Personal, PersonalInterface } from '../../app/Models/Personal.model';
import { User } from '../../app/Models/User.model';
import { Aluno } from '../../app/Models/Aluno.model';
import path from 'path';
import {PersonalRepository} from '../../app/Repositories/Personal.repository';
import { AlunoRepository } from '../../app/Repositories/Aluno.repository';
console.log(path.basename(__filename))

test('create one Personal', () => {
    const personal = new Personal({
        id:1,
        user_id:1
    })
    expect(personal).toBeInstanceOf(Personal)
})

test('should be able to linke with user', async () => {
    const personalRepositorie = new PersonalRepository();
    const alunoRepositorie = new AlunoRepository();
    const personal = await personalRepositorie.first();
    const aluno = await alunoRepositorie.first();
    await personal.addAluno(aluno);
    const alunos = await personal.alunos();
    const verifyIfAllAlunosAreInstanceOfAluno = alunos
                                                .map(aluno => aluno instanceof Aluno)
                                                .find(instance => instance === false);
   
    expect(verifyIfAllAlunosAreInstanceOfAluno).toBeFalsy()
})


test('should be able to unlink personal from aluno', async () => {
    const personalRepositorie = new PersonalRepository();
    const personal = await personalRepositorie.first();
    let alunos = await personal.alunos();
    const aluno = alunos[0]
    await personal.removeAluno(aluno)
    expect( await personal.alunos()).toHaveLength(0);
})
