import express from 'express';
import HomeController from '../controllers/homeController.js';
import { requestTime, requestAlert, auth } from '../middleware/middlewares.js';
const Routes = express.Router();
//console.log(HomeController)

Routes.use(auth);
Routes.get('/', HomeController.index);
Routes.get('/users', HomeController.users);
Routes.get('/teste', HomeController.teste);

export default Routes;