import { userFactory } from '../factorys/user.factory.js';
import db from '../db.js';

export const userSeeder = async () => {
    let TOTAL = 300;
    const users = userFactory({qtd:TOTAL});
    await db('Users').insert(users);
    console.log('\t - Users inseridos!')
}