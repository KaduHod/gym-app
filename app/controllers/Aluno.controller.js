import { AlunoRepository } from '../repository/Aluno.repository.js';
class AlunoController {
    constructor(){
        this.repository = new AlunoRepository();
    }

    index = async (req, res) => {
        res.send({
            n : await this.repository.quantityOfRegisters()
        });
    }

    list = async (req, res) => {
        res.send({
            n : await this.repository.all()
        });
    }

    one = async (req, res) => {
        const  { id } = req.params;
        res.send({
            aluno : await this.repository.byId({id})
        });
    }

    test = async (req, res) => {
        return this.repository.allTest()
    }
    
}

export default new AlunoController();