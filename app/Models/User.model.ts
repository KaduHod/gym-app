export interface UserInterface {
    id:Number
    name:String
    nickname:String
    email:String
    cellphone:String
    password:String
    createdAt:Date
    updatedAt:Date
};

export class User {
    private props:UserInterface;

    constructor(user:UserInterface){
        this.props = user;
    }

    public id(): Number {
        return this.props.id;
    }
}