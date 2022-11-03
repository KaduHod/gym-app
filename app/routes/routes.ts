import express, { Router, Request, Response } from 'express';
import AdministradorController from '../Controllers/Administrador.controller';
import LoginController from '../Controllers/Login.controller';

const Routes:Router = express.Router();

Routes.get('/login', LoginController.login);
Routes.get('/register', LoginController.registerView);
Routes.post('/register', LoginController.register);
Routes.get('/', AdministradorController.index);

export default Routes;