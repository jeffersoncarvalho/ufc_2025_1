const ProfessorModel = require("../models/professor.model");
const professores = require("../data/professores");

let id = 2

class ProfessorService {
    static list() {
        return professores;
    }

    static criar(professorJson) {
        const novoProfessor = new ProfessorModel(
            ++id,
            professorJson.nome,
            professorJson.titulacao,
            professorJson.img
        )
        professores.push(novoProfessor)
        return novoProfessor     
    }

    static recuperar(id) {
        for(let i=0; i< professores.length; i++) {
            if(professores[i].id == id){
                return professores[i]
            }
        }
        return null
    }
}

module.exports = ProfessorService