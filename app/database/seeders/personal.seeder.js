import { personalFactory } from "../factorys/personal.factory.js";
import db from "../db.js";

export const personalSeeder = async (usersId = []) => {
    const personals = personalFactory({usersId})
    await db('Personal').insert(personals);
    console.log('\t - Personais inseridos!')
}