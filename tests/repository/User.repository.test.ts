import { test, expect } from 'vitest'
import { Aluno } from '../../app/Models/Aluno.model';
import { UserRepository } from '../../app/Repositories/User.repository'
import {User, UserInterface} from '../../app/Models/User.model'
import path from 'path'
console.log(path.basename(__filename))

test('create UserRepository', () => {
    const userRepository = new UserRepository();
    expect(userRepository).toBeInstanceOf(UserRepository);
})

test('insert into table users', async () => {
    const newInstanceOfUser = {
        name: 'Carlos',
        nickname: 'kaduhod',
        email: 'Carlos@mail.com',
        password: '123456',
        cellphone: '41 99985-6247',
    }
    const userRepo = new UserRepository();
    const query = await userRepo.create(newInstanceOfUser);
    expect(query).toBeTruthy()
})

test('should insert two users', async () => {
    const newInstanceOfUser = [
        {
            name: 'Carlos',
            nickname: 'kaduhod',
            email: 'Carlos@mail.com',
            password: '123456',
            cellphone: '41 99985-6247',
        },
        {
            name: 'Carlos2 ',
            nickname: 'kaduhod2',
            email: 'Carlos2@mail.com',
            password: '1234562',
            cellphone: '41 92985-6247',
        }
    ];
    const userRepo = new UserRepository();
    const query = await userRepo.create(newInstanceOfUser)
    expect(query).toBeTruthy()
})

test('repository should return all users', async () => {
    const userRepository = new UserRepository();
    const users = await userRepository.allUsers();
    expect(users).toBeTypeOf('object');
})

test('should return user by id', async () => {
    const id = 2;
    const userRepo = new UserRepository();
    const user = await userRepo.getUserById(id);
    expect(user).toBeInstanceOf(User);
})

test('return a false when the search does not return any data', async () => {
    const id = 9999999999999999999;
    const userRepo = new UserRepository();
    const user = await userRepo.getUserById(id);
    expect(user).toEqual(false);
})