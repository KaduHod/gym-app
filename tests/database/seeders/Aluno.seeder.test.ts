// import { UserFactory } from '../factory/User.factory';
import { UserRepository } from '../../../app/Repositories/User.repository';
import { PersonalRepository } from '../../../app/Repositories/Personal.repository';
import { test, expect } from 'vitest';
import { personalSeeder } from '../../../app/database/seeders/Personal.seeder';
import { dbFresh } from '../../../app/database/seeders/fresh.seeder';
import { userSeeder } from '../../../app/database/seeders/User.seeder';
import { AlunoRepository } from '../../../app/Repositories/Aluno.repository';
import { alunoSeeder } from '../../../app/database/seeders/Aluno.seeder';

test('Should seed alunos with the double of personais', async () => {
    const personalRepo = new PersonalRepository();
    const alunoRepo = new AlunoRepository();
    const totalPersonais = await personalRepo.getTotalPersonais();
    const expectedNumberOfAlunos = totalPersonais*2;
    await alunoSeeder();
    const totalAlunos = await alunoRepo.getTotal();
    expect(totalAlunos).to.be.equal(expectedNumberOfAlunos)
})