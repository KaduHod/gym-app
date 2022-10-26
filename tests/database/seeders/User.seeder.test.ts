
import { test, expect } from 'vitest'
import { userSeeder } from '../../../app/database/seeders/User.seeder'
import { UserRepository } from '../../../app/Repositories/User.repository';
import {dbFresh} from '../../../app/database/seeders/fresh.seeder';

test('Should create users', async () => {
    await dbFresh();
    await userSeeder();
    const userRepo = new UserRepository;
    const totUsers = await userRepo.getTotalUsers();
    expect(totUsers).to.be.greaterThan(0);
})