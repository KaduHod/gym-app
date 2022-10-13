import db from '../database/db.js';
class HomeController {
    constructor(){
        this.db = db;
    }
    index(req, res) {
        res.send({'message' : 'Hello world'});
    }
    async users(req, res) {
        const users = await db('users');
        res.send({users});
    }
}

export default new HomeController();