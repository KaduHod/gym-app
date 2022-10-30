// import { UserFactory } from '../factory/User.factory';
import { UserRepository } from '../../../app/Repositories/User.repository';
import { PersonalRepository } from '../../../app/Repositories/Personal.repository';
import { test, expect } from 'vitest';
import { personalSeeder } from '../../../app/database/seeders/Personal.seeder';
import { dbFresh } from '../../../app/database/seeders/fresh.seeder';
import { userSeeder } from '../../../app/database/seeders/User.seeder';

test('Should seed personal', async () => {
    const personalRepo = new PersonalRepository();
    // await personalSeeder();
    const totalPersonais = await personalRepo.getTotalPersonais();
    expect(totalPersonais).toBeGreaterThan(0)
})