import { test, expect } from 'vitest'
import { Aluno } from './app/Models/Aluno.model';
import {UserRepository} from './app/Repositories/User.repository'
import connection from './app/database/connection';
import { UserFactory } from './app/database/factory/User.factory';

const main = async () => {
    // const userRepository = new UserRepository();
    // const users = await userRepository.allUsers();
    // console.log(users)
    // const db = connection;
    // const users = await db('users');
    // console.log({users})
    let cont=0
    let users=[]
    while(cont<10){
        users.push(UserFactory())
        cont++;
    }

    const userRepo = new UserRepository();
    const query = await userRepo.create(users)
    console.log({users, query})
}

main();