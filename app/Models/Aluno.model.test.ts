import { test, expect } from 'vitest'
import { Aluno, AlunoInterface } from "./Aluno.model"
import { User } from './User.model';

test('create one Aluno', () => {
    const aluno = new Aluno({
        id:2,
        user_id:2,
        personal_id:null
    });
    
    expect(aluno).toBeInstanceOf(Aluno)
})

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

