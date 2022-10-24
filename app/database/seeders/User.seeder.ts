import { UserFactory } from '../factory/User.factory';
import { UserRepository } from '../../Repositories/User.repository';
export async function userSeeder(): Promise<void>
{
    let numUsersToCreate = 300;
    const users = [];
    while(numUsersToCreate > 0){
        users.push(UserFactory())
        numUsersToCreate--;
    }
    const userRepository = new UserRepository();
    await userRepository.create(users);
}