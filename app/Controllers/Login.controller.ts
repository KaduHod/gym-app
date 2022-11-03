import {Request, Response} from 'express';
import RegisterRequest from '../Requests/Register.request';
class LoginController{
   constructor(){

   }

   public async login(req: Request, res: Response): Promise<void>
   {
      return res.render('login/login')
   }

   public async registerView(req: Request, res: Response): Promise<void>
   {
      return res.render('login/register')
   }

   public async register(req: Request, res: Response): Promise<Response>
   {
      const registerRequest = new RegisterRequest(req.body);
      const validate = registerRequest.handle();
      if(!validate){
         res.sendStatus(400);
         return res.send({error:'invalid resquest'});
      }

      

      res.sendStatus(201);
      res.setHeader('content-type', 'application/json')
      return res.send(JSON.stringify({message:'Usuário criado'}));
   }
}

export default new LoginController();
