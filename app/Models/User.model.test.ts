import { test, expect } from 'vitest'
import { User, UserInterface } from "./User.model";

test('create an user', () =>{
    const newUser = new User({
        name: 'Carlos',
        nickname: 'kaduhod',
        email: 'Carlos@mail.com',
        password: '123456',
        cellphone: '41 99985-6247',
    });

    expect(newUser).toBeInstanceOf(User);
});
