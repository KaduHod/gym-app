import { User, UserInterface } from "../../Models/User.model";

import { faker } from '@faker-js/faker';

export const UserFactory = ():UserInterface => {
    return {
        name: faker.name.firstName(),
        nickname : faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(20),
        cellphone : faker.phone.number('(41) 9####-####'),
    }
}
