import { test, expect } from 'vitest'
import { Aluno } from '../../app/Models/Aluno.model';
import { User, UserInterface } from "../../app/Models/User.model";

test('create an user', () =>{
    const newUser = new User({
        id:null,
        name: 'Carlos',
        nickname: 'kaduhod',
        email: 'Carlos@mail.com',
        password: '123456',
        cellphone: '41 99985-6247',
    });
    expect(newUser).toBeInstanceOf(User);
});

test('should save a user into database', async () => {
    const newUser = new User({
        name: 'Carlos',
        nickname: 'kaduhod',
        email: 'Carlos@mail.com',
        password: '123456',
        cellphone: '41 99985-6247',
    });

    await newUser.save();



    console.log(newUser)

})


