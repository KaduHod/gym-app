import { Aluno } from "../Models/Aluno.model";
import { User } from "../Models/User.model";

export const alunos = [
    new Aluno({
        id:2,
        user_id:2,
        personal_id:null
    }),
    new Aluno({
        id:3,
        user_id:3,
        personal_id:null
    })
]

export const users = [
    new User({
        id:1,
        name: 'Carlos',
        nickname: 'kaduhod',
        email: 'Carlos@mail.com',
        password: '123456',
        cellphone: '41 99985-6247',
        createdAt: new Date(),
        updatedAt: new Date()
    }),
    new User({
        id:2,
        name: 'Natasha',
        nickname: 'Arnilloy',
        email: 'nath@mail.com',
        password: '7891011',
        cellphone: '41 99985-6244',
        createdAt: new Date(),
        updatedAt: new Date()
    }),
    new User({
        id:3,
        name: 'Dog',
        nickname: 'maddog',
        email: 'maddogs@mail.com',
        password: '15161718',
        cellphone: '41 99985-6248',
        createdAt: new Date(),
        updatedAt: new Date()
    }),
]