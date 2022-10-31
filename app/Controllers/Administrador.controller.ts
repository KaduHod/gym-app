import {Request, Response} from 'express';

class AdministradorController{
    constructor(){

    }

    public async index(req: Request, res: Response): Promise<void>
    {
       return res.render('home')
    }
}

export default new AdministradorController();
