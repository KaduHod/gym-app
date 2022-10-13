import { userFactory } from '../factorys/user.factory.js';
import db from '../db.js';

export const userSeeder = async () => {
    let TOTAL = 200;
    const users = userFactory({});
    await db('Users').insert(users);
}