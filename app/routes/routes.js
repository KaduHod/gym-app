import express from 'express';
import PersonalController from '../controllers/PersonalController.js';
import ExercicioController from '../controllers/Exercicio.controller.js';
import AlunoController from '../controllers/Aluno.controller.js';
import { requestTime, requestAlert, auth } from '../middleware/middlewares.js';
import { Route } from 'express';
const Routes = express.Router();

Routes.use(auth);
Routes.get('/personal', PersonalController.list);
Routes.get('/Personal/:id', PersonalController.getPersonal);
Routes.get('/Personal/:id/alunos', PersonalController.getAlunos);
Routes.get('/Exercicio', ExercicioController.list);
Routes.get('/Exercicio/:id', ExercicioController.getExercicio);
Routes.get('/Exercicio/:id/agonists', ExercicioController.agonists);
Routes.get('/Exercicio/:id/antagonists', ExercicioController.antagonists);
Routes.get('/Exercicio/:id/synergists', ExercicioController.synergists);
Routes.get('/Exercicio/:id/muscles', ExercicioController.muscles);
Routes.get('/Aluno/qtd', AlunoController.index);
Routes.get('/Aluno', AlunoController.list);
Routes.get('/test', AlunoController.test)


export default Routes;