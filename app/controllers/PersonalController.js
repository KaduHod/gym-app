import { PersonalRepository } from "../repository/Personal.repository.js";
class PersonalController {
    constructor(){
        this.repository = new PersonalRepository();
    }
    list = async (req, res) => {
        res.send({
            all : await this.repository.all()
        });
    }

    getPersonal = async (req, res) => {
        const { id } = req.params;
        res.send({
            Personal : await this.repository.byId({ id })
        })
    }

    getAlunos =  async (req, res) => {
        const { id } = req.params;
        res.send({
            Alunos : await this.repository.alunos({ PersonalId:id })
        })
    }
}

export default new PersonalController();