import { User, UserInterface } from "../Models/User.model";
import { AbstracRepository } from "./abstract.repository";
export class UserRepository extends AbstracRepository{
    // private table:String

    constructor(){
        super()
    }

    async allUsers():Promise<User[] | any>
    {
        return await this
                        .db
                        .table('users')
    }

    public async create(values:UserInterface[] | UserInterface): Promise<void>
    {
        return await this
                        .db('users')
                        .insert(values)
    }

    public async getUserById(id:Number): Promise<User |  boolean>
    {
        const user:UserInterface | any = await this
                                                    .db('users')
                                                    .where('id',id)
                                                    .limit(1)
        if(!user.length) {
            console.error('Não foi achado nenhum usuario com o id');
            return false;
        }
        if(user.length > 1) {
            console.error('Retornou mais de um usuario');
            return false;
        }
        return new User(user[0])
    }   

    public async getTotalUsers(): Promise<any>
    {
        const query = await this.db.raw('Select count(*) from users');
        return query[0][0]['count(*)'];
    }
}