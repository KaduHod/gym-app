import express from 'express';
import PersonalController from '../controllers/PersonalController.js';
import ExercicioController from '../controllers/Exercicio.controller.js';
import { requestTime, requestAlert, auth } from '../middleware/middlewares.js';
const Routes = express.Router();

Routes.use(auth);
Routes.get('/personal', PersonalController.list);
Routes.get('/Personal/:PersonalId', PersonalController.getPersonal);
Routes.get('/Personal/:PersonalId/alunos', PersonalController.getAlunos);
Routes.get('/Exercicio', ExercicioController.list);
Routes.get('/Exercicio/:exercicioId', ExercicioController.getExercicio);
Routes.get('/Exercicio/:exercicioId/agonists', ExercicioController.agonists);
Routes.get('/Exercicio/:exercicioId/antagonists', ExercicioController.antagonists);
Routes.get('/Exercicio/:exercicioId/synergists', ExercicioController.synergists);
Routes.get('/Exercicio/:exercicioId/muscles', ExercicioController.muscles);


export default Routes;