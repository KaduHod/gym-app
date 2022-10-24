import { test, expect } from 'vitest'
import { Aluno } from '../Models/Aluno.model';
import { UserRepository } from './User.repository'
import {User, UserInterface} from '../Models/User.model'

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

test('throw error if not find user by id', async () => {
    const id = 999;
    const userRepo = new UserRepository();
    const user = await userRepo.getUserById(id);
    expect(user).toEqual(false);
})