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

    static recuperar(id) {
        for(let i=0; i<professores.length; i++) {
            if(professores[i].id == id) return professores[i]
        }
        return null
    }

    static atualizar(id, {nome, titulacao, img}) {
        for(let i=0; i<professores.length; i++) {
            if(professores[i].id == id){
                professores[i].nome = nome
                professores[i].titulacao = titulacao
                professores[i].img = img 
                return professores[i]
            }
        }
        return null
    }

    static apagar(id){
        for(let i=0; i<professores.length; i++){
            if(professores[i].id == id){
                professores.splice(i,1)
                return {"sucesso":true}
            }
        }
        return {"sucesso":false}
    }
}

module.exports = ProfessorService