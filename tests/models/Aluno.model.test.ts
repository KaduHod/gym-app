import { test, expect } from 'vitest'
import { Aluno, AlunoInterface } from "../../app/Models/Aluno.model"
import { Personal } from '../../app/Models/Personal.model';
import { User } from '../../app/Models/User.model';
import { AlunoRepository } from '../../app/Repositories/Aluno.repository';
import { PersonalRepository } from '../../app/Repositories/Personal.repository';

test('create one Aluno', () => {
    const aluno = new Aluno({
        id:null,
        user_id:2,
        personal_id:null
    });
    expect(aluno).toBeInstanceOf(Aluno)
})


test('Should be able to link with persnoal', async () => {
    const alunoRepository = new AlunoRepository();
    const aluno = await alunoRepository.first();
    const personalRepository = new PersonalRepository();
    let personal = await personalRepository.first();
    await aluno.addPersonal(personal);
    personal = await aluno.getPersonal();
    expect(personal).toBeInstanceOf(Personal);
});

// test('aluno should have a user linked with it', () => {
    // const newUser = new User({
        // name: 'Carlos',
        // nickname: 'kaduhod',
        // email: 'Carlos@mail.com',
        // password: '123456',
        // cellphone: '41 99985-6247',
        // createdAt: new Date(),
        // updatedAt: new Date()
    // });
// 
    // const aluno = new Aluno({
        // id:2,
        // user_id:2,
        // personal_id:null
    // })
// })

