const ProfessorModel = require("../models/professor.model")
const professores = require("../data/professores")

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
}

module.exports = ProfessorService