import express from 'express';
import HomeController from '../controllers/homeController.js';
import { requestTime, requestAlert, auth } from '../middleware/middlewares.js';
const Routes = express.Router();

Routes.use(auth);
Routes.get('/', HomeController.index);
Routes.get('/users', HomeController.users);

export default Routes;