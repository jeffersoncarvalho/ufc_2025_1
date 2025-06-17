const ProfessorModel = require("../models/professor.model")
const professores = require("../data/professores")

let id = 2

class ProfessorService {

    static listar() {
        return professores;
    }
    static recuperar(id) {
        for(let i=0; i<professores.length; i++) {
            if(professores[i].id == id) return professores[i]
        }
        return null
    }
    static criar(professor) {
        const novoProfessor = new ProfessorModel(
            ++id,
            professor.nome,
            professor.titulacao,
            professor.img
        )
        professores.push(novoProfessor)
        return novoProfessor
    }
}

module.exports = ProfessorService