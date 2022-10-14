import express from 'express';
import PersonalController from '../controllers/PersonalController.js';
import { requestTime, requestAlert, auth } from '../middleware/middlewares.js';
const Routes = express.Router();

Routes.use(auth);
Routes.get('/personal', PersonalController.list);
Routes.get('/Personal/:PersonalId', PersonalController.getPersonal)
Routes.get('/Personal/:PersonalId/alunos', PersonalController.getAlunos)

export default Routes;