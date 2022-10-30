import express, { Router, Request, Response } from 'express';
import AdministradorController from '../Controllers/Administrador.controller';

const Routes:Router = express.Router();

Routes.get('/', AdministradorController.index);

export default Routes;