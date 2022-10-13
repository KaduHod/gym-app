import { faker } from '@faker-js/faker';
export const userFactory = ({qtd = 10}) => {
    let users = [];
    while (qtd > 0) {
        users.push({
            nickname : faker.name.firstName(),
            email : faker.internet.email(),
            password : faker.internet.password()
        })
        qtd--;
    }

    return users;
}