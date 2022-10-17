import { faker } from '@faker-js/faker';
export const treinoFactory = () => {
    return {
        objetivo : faker.random.words(5),
        description : faker.random.words(10)
    }
}