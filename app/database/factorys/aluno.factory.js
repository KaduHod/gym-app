import { faker } from '@faker-js/faker';
export const alunosFactory = ({usersId}) => {
    return usersId.map( id => {
        return {
            celphone: faker.phone.number('+41 #####-####'),
            user_id:id
        }
    });
}