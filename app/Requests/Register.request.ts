
interface RegisterRequestInterface {
    name:string;
    nickname:string;
    password:string;
    cellphone:string;
    email:string;
}

export default class RegisterRequest implements RegisterRequestInterface {
    public name:string;
    public nickname:string;
    public password:string;
    public cellphone:string;
    public email:string;

    constructor({name, nickname, password, cellphone, email}:RegisterRequestInterface){
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.cellphone = cellphone;
        this.email = email;
    }

    public handle(): boolean
    {
        /**
         * Name
         */
        if(this.name.length < 4) return false;
        
        /**
         * Nick_Name
         */
        if(this.nickname.length < 4) return false;
        
        /**
         * Email
         */
        if(!this.email.length) return false;
        
        /**
         * cellphone
         */
        if(!this.cellphone.length) return false;
            
        /**
         * Password
         */
        if(this.password.length < 8 ) return false

        return true;
    }
}
