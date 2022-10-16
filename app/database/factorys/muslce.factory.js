import { faker } from '@faker-js/faker';
export const muscleFactory = () => {
    return {
        name : faker.random.word(),
        image : faker.internet.url(),
        created_at: faker.date.between('2000-01-01T00:00:00.000Z', '2005-01-01T00:00:00.000Z'),
        updated_at: faker.date.between('2005-01-01T00:00:00.000Z', '2010-01-01T00:00:00.000Z')
    }
}