import db from "../database/db.js";
import { Repository } from "./Repository.js";

export class ExercicioRepository extends Repository {
    constructor(){
        super();
        this.db = db;
        this.table = 'exercicio';
    }

    agonistsAntagonists = async ({exercicioId, type}) => {
        if(type == 'agonists'){
            return await this.db
                        .select('muscle.name', 'muscle.image', 'exercicio_agonists_antagonists.agonist_activation_rate')
                        .from('exercicio_agonists_antagonists')
                        .where('exercicio_agonists_antagonists.exercicio_id', exercicioId)
                        .innerJoin('muscle','muscle.id','exercicio_agonists_antagonists.agonist_id');
        }
        return await this.db
                        .select('muscle.name', 'muscle.image', 'exercicio_agonists_antagonists.agonist_activation_rate')
                        .from('exercicio_agonists_antagonists')
                        .where('exercicio_agonists_antagonists.exercicio_id', exercicioId)
                        .innerJoin('muscle','muscle.id','exercicio_agonists_antagonists.antagonist_id');
                        
    }
    
    synergists = async ({exercicioId}) => {
        return await this.db
                        .select('muscle.name', 'muscle.image', 'exercicio_synergists.activation_rate')
                        .from('exercicio_synergists')
                        .where('exercicio_synergists.exercicio_id', exercicioId)
                        .innerJoin('muscle','muscle.id','exercicio_synergists.muscle_id');
                        
    }

    muscles = async ({exercicioId}) => {
        const agonists = await this.agonistsAntagonists({exercicioId, type:'agonists'});
        const antagonists = await this.agonistsAntagonists({exercicioId, type:'antagonists'});
        const synergists = await this.synergists({exercicioId});
        return {agonists, antagonists, synergists};                         
    } 
}