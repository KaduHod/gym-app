import db from "../database/db.js";
import { Repository } from "./Repository.js";

export class ExercicioRepository extends Repository {
    constructor(){
        super();
        this.db = db;
        this.table = 'exercicio';
    }

    all = async () => {
        return await this.db
                        .select('')
                        .from(this.table);
    }

    one = async ({exercicioId}) => {
        return await this.db
                        .select()
                        .from(this.table)
                        .where('Exercicio.id', exercicioId);
    }

    agonists = async ({exercicioId}) => {
        return await this.db
                        .select('muscle.name', 'muscle.image', 'exercicio_agonists.activation_rate')
                        .from('exercicio_agonists')
                        .where('exercicio_agonists.exercicio_id', exercicioId)
                        .innerJoin('muscle','muscle.id','exercicio_agonists.muscle_id');
                        
    }
    antagonists = async ({exercicioId}) => {
        return await this.db
                        .select('muscle.name', 'muscle.image')
                        .from('exercicio_antagonists')
                        .where('exercicio_antagonists.exercicio_id', exercicioId)
                        .innerJoin('muscle','muscle.id','exercicio_antagonists.muscle_id');
                        
    }
    synergists = async ({exercicioId}) => {
        return await this.db
                        .select('muscle.name', 'muscle.image', 'exercicio_synergists.activation_rate')
                        .from('exercicio_synergists')
                        .where('exercicio_synergists.exercicio_id', exercicioId)
                        .innerJoin('muscle','muscle.id','exercicio_synergists.muscle_id');
                        
    }

    muscles = async ({exercicioId}) => {
        const agonists = await this.agonists({exercicioId});
        const antagonists = await this.antagonists({exercicioId});
        const synergists = await this.synergists({exercicioId});
        return {agonists, antagonists, synergists};                         
    } 
}