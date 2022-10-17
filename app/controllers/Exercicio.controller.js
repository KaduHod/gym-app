import { ExercicioRepository } from "../repository/Exercicio.repository.js";
class ExercicioController {
    constructor(){
        this.repository = new ExercicioRepository();
    }
    list = async (req, res) => {
        res.send({
            all : await this.repository.all()
        });
    }
    getExercicio = async (req, res) => {
        const { id } = req.params;
        res.send({
            exercicio : await this.repository.byId({ exercicioId:id })
        })
    }
    agonists = async (req, res) => {
        const { id } = req.params;
        res.send({
            agonists : await this.repository.agonistsAntagonists({ exercicioId:id, type:'agonists' })
        })
    }
    antagonists = async (req, res) => {
        const { id } = req.params;
        res.send({
            antagonists : await this.repository.agonistsAntagonists({ exercicioId:id,type:'antagonists' })
        })
    }
    synergists = async (req, res) => {
        const { id } = req.params;
        res.send({
            synergists : await this.repository.synergists({ exercicioId:id })
        })
    }
    muscles = async (req, res) => {
        const { id } = req.params;
        res.send({
            muscles : await this.repository.muscles({ exercicioId:id })
        })
    }
}

export default new ExercicioController();