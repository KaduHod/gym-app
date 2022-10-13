import { faker } from '@faker-js/faker';
export const userFactory = ({qtd = 100}) => {
    let users = [];
    while (qtd > 0) {
        users.push({
            nickname : faker.name.firstName(),
            email : faker.internet.email(),
            password : faker.internet.password(),
            createdAt: faker.date.between('2000-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
            updatedAt: faker.date.between('2000-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')
        })        
        qtd--;
    }
    return users;
}