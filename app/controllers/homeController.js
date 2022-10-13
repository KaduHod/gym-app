import db from '../database/db.js';
class HomeController {
    constructor(){
        this.db = db;
    }

    index = (req, res) => {
        console.log('aquie 222233322')
        res.send({'message' : 'Hello world 100% ATUALIZADO, É RUIM DE ATURAR'});
    }

    users = async (req, res) => {
        const users = await this.db('Users');
        res.send({users});
    }

    teste = (req, res) => {
        res.send('teste');
    }
}

export default new HomeController();