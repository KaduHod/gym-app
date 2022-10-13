import { faker } from '@faker-js/faker';
export const personalFactory = ({usersId}) => {
    return usersId.map( id => {
        return {
            celphone: faker.phone.number('+55 #####-####'),
            user_id:id
        }
    });
}