const ProfessorModel = require("../models/professor.model");
const professores = require("../data/professores");



class ProfessorService {
    static list() {
        return professores;
    }
}

module.exports = ProfessorService