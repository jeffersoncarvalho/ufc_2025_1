class ProfessorModel {

    constructor(id, nome, titulacao, img) {
        this.id = id;
        this.nome = nome;
        this.titulacao = titulacao;
        this.img = img;
    }
}

//CommonJS
module.exports = ProfessorModel
//ECS6
//export default ProfessorModel