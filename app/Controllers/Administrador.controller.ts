import {Request, Response} from 'express';

class AdministradorController{
    constructor(){

    }

    public async index(req: Request, res: Response)
    {
        res.send({message:'Hello world'});
    }
}

export default new AdministradorController();
