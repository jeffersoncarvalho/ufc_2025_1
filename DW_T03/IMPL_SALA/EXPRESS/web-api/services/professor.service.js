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
    static atualizar(id, professor) {
        for(let i=0; i<professores.length; i++){
            if(professores[i].id == id){
                professores[i].nome = professor.nome;
                professores[i].titulacao = professor.titulacao;
                professores[i].img = professor.img;
                return professores[i]
            }
        }
        return null
    }

    static apagar(id) {
        for(let i=0; i<professores.length; i++){
            if(professores[i].id == id){
                professores.splice(i,1)
                return true
            }
        }
        return false
    }
}

module.exports = ProfessorService