import { UserRepository } from "../Repositories/User.repository"

export interface UserInterface {
    name:String
    nickname:String
    email:String
    cellphone:String
    password:String
};

export class User {
    public id:Number | null;
    public name:String;
    public nickname:String;
    public email:String;
    public cellphone:String;
    private password:String;
    private userRepository:UserRepository;
    public createdAt:Date | null;
    public updatedAt:Date | null;
    
    
    constructor(user:any){
        this.id = user.id ?? null;
        this.name = user.name;
        this.nickname = user.nickname;
        this.email = user.email;
        this.cellphone = user.cellphone;
        this.password = user.password;
        this.createdAt = user.created_at ?? null;
        this.updatedAt = user.updated_at ?? null;
        this.userRepository = new UserRepository();
    }
}