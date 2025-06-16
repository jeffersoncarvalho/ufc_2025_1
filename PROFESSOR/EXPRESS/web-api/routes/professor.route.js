var express = require('express');
const ProfessorService = require('../services/professor.service');
var router = express.Router();

router.get(
    "/listar"
    ,
    (request, response, next) => {
        response.json(ProfessorService.listar())
    }
)

router.post(
    "/criar"
    ,
    (request, response, next) => {
        const professorResposta = ProfessorService.criar(request.body)
        response.json(professorResposta)
    }
)

module.exports = router;