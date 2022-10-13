import db from '../database/db.js';
class HomeController {
    constructor(){
        this.db = db;
        this.teste = 'teste';
    }

    index = (req, res) => {
        res.send({'message' : 'Hello world'});
    }

    users = async (req, res) => {
        const users = await this.db('Users');
        res.send({users});
    }
}

export default new HomeController();