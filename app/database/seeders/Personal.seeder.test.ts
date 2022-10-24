// import { UserFactory } from '../factory/User.factory';
import { UserRepository } from '../../Repositories/User.repository';
import { test, expect } from 'vitest'
import { personalSeeder } from './Personal.seeder'

test('Should seed personal', async () => {
    const userRepo = new UserRepository();
    const totalUsers = await userRepo.getTotalUsers();
    const seeder = await personalSeeder();
})