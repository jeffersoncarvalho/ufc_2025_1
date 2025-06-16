const ProfessorModel = require("../models/professor.model")

const professores = require("../data/professores")

let id = 2

class ProfessorService {
    
    static listar() {
        return professores;
    }

    static criar(professorJson) {
        const professor = new ProfessorModel(
            ++id,
            professorJson.nome,
            professorJson.titulacao,
            professorJson.img
        )
        professores.push(professor)
        return professor
    }
}

module.exports = ProfessorService