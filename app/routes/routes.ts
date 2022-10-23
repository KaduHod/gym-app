import express, { Router, Request, Response } from 'express';

const Routes:Router = express.Router();

Routes.get('/', (request:Request, response:Response):Response => {
    return response.send({message:'helloworld'})
})



export default Routes;