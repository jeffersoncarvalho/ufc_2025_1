var express = require('express');
const ProfessorService = require('../services/professor.service');
var router = express.Router();

router.get(
    "/listar",
    (request, response) => {
        response.json(ProfessorService.listar())
    }
)

router.get(
    "/recuperar/:id",
    (request, response) => {
        const professor = ProfessorService.recuperar(request.params.id)
        response.json(professor)
    }
)

router.post(
    "/criar",
    (request, response) => {
        const novoProfessor = ProfessorService.criar(request.body)
        response.json(novoProfessor)
    }
)

router.put(
    "/atualizar/:id",
    (request, response) => {
        const professorAtualizado = ProfessorService.atualizar(
            request.params.id,
            request.body
        )
        response.json(professorAtualizado)
    }
)

router.delete(
    "/apagar/:id",
    (request, response) => {
        const resposta = ProfessorService.apagar(request.params.id)
        response.json({"sucesso":resposta})
    }
)

module.exports = router