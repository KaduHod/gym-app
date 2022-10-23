import { User, UserInterface } from "./User.model";

function main(){
    const newUser = new User({
        id:1,
        name: 'Carlos',
        nickname: 'kaduhod',
        email: 'Carlos@mail.com',
        password: '123456',
        cellphone: '41 99985-6247',
        createdAt: new Date(),
        updatedAt: new Date()
    });

    console.log(newUser)
}

main();