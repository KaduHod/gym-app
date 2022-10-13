import { faker } from '@faker-js/faker';
import db from '../db.js';

export const userSeeder = async () => {
    let TOTAL = 100;
    let users = []
    while(TOTAL > 0){
        users.push({
            nickname : faker.name.firstName(),
            email : faker.internet.email(),
            password : faker.internet.password()
        });
        TOTAL--;
    }
    await db('users').insert(users);
    console.log('\t - Usúarios inseridos!')
}