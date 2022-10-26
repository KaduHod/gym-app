// import { UserFactory } from '../factory/User.factory';
import { UserRepository } from '../../../app/Repositories/User.repository';
import { PersonalRepository } from '../../../app/Repositories/Personal.repository';
import { test, expect } from 'vitest';
import { personalSeeder } from '../../../app/database/seeders/Personal.seeder';
import { dbFresh } from '../../../app/database/seeders/fresh.seeder';
import { userSeeder } from '../../../app/database/seeders/User.seeder';

test('Should seed personal with 3 times less alunos', async () => {
    await dbFresh();
    await userSeeder();
    const userRepo = new UserRepository();
    const personalRepo = new PersonalRepository();
    const totalUsers = await userRepo.getTotalUsers();
    await personalSeeder();
    const totalPersonais = await personalRepo.getTotalPersonais();
    const expectedNumberOfPersonals = totalUsers/3;
    expect(totalPersonais).to.be.equal(expectedNumberOfPersonals)
})