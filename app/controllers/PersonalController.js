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
        const { PersonalId } = req.params;
        res.send({
            Personal : await this.repository.one({ PersonalId })
        })
    }

    getAlunos =  async (req, res) => {
        const { PersonalId } = req.params;
        res.send({
            Personal : await this.repository.alunos({ PersonalId })
        })
    }
}

export default new PersonalController();