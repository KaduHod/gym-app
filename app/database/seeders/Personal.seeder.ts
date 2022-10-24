import { UserFactory } from '../factory/User.factory';
import { UserRepository } from '../../Repositories/User.repository';
export async function personalSeeder(): Promise<Number>
{
    const userRepository = new UserRepository();
    let totalUsers = await userRepository.getTotalUsers();
    let numUsersToCreate = totalUsers / 3;
    let users = await userRepository.allUsers();
    let personals = users.slice(0,numUsersToCreate - 1)
    return personals;
}