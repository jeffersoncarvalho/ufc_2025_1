const ProfessorModel = require("../models/professor.model")

const professores = require("../data/professores")
let id = 3

class ProfessorService {
    static listar() {
        return professores
    }

    static criar(professorJson) {
        const professor = new ProfessorModel(
            id++,
            professorJson.nome,
            professorJson.titulacao,
            professorJson.img
        )
        professores.push(professor)
        return professor
    }

    static recuperar(id) {
        console.log(id)
        for(let i=0; i < professores.length; i++) {
            if (professores[i].id == id) return professores[i]
        }
        return null
    }

    static editar(id,professorJson){
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id){
                professores[i].nome = professorJson.nome
                professores[i].titulacao = professorJson.titulacao
                professores[i].img = professorJson.img
                return professores[i]
            }
        return null
    }

    static delete(id) {
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id){
                professores.splice(i,1) 
                return true
            }
        return false
    }

}

module.exports = ProfessorService