import { UserFactory } from '../factory/User.factory';
import { User } from '../../Models/User.model';
import { UserRepository } from '../../Repositories/User.repository';
import { PersonalRepository } from '../../Repositories/Personal.repository';
export async function personalSeeder(): Promise<any>
{
    const userRepository = new UserRepository();
    const personalRepo = new PersonalRepository();
    let users = await userRepository.allUsers();
    let totalUsers = users.length;
    let numUsersToCreate = totalUsers / 3;
    let personals = users.slice(0,numUsersToCreate)
    await personalRepo.create(personals.map( ( {id}:User ) => ({user_id:id}) ));
}