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

router.get(
    "/recuperar/:id"
    ,
    (request, response, next) => {
        
        const professor = ProfessorService.recuperar(request.params.id)
        response.json(professor)
    }
)

router.put(
    "/editar/:id"
    ,
    (request, response, next) => {
        const professorResposta = ProfessorService.editar(request.params.id, request.body)
        response.json(professorResposta)
    }
)

router.delete(
    "/delete/:id"
    ,
    (request, response, next) => {
        const out = ProfessorService.delete(request.params.id)
        response.json({"sucesso":out})
    }
)

module.exports = router;