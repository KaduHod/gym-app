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
        const { exercicioId } = req.params;
        res.send({
            exercicio : await this.repository.one({ exercicioId })
        })
    }
    agonists = async (req, res) => {
        const { exercicioId } = req.params;
        res.send({
            agonists : await this.repository.agonists({ exercicioId })
        })
    }
    antagonists = async (req, res) => {
        const { exercicioId } = req.params;
        res.send({
            antagonists : await this.repository.antagonists({ exercicioId })
        })
    }
    synergists = async (req, res) => {
        const { exercicioId } = req.params;
        res.send({
            synergists : await this.repository.synergists({ exercicioId })
        })
    }
    muscles = async (req, res) => {
        const { exercicioId } = req.params;
        res.send({
            muscles : await this.repository.muscles({ exercicioId })
        })
    }
}

export default new ExercicioController();