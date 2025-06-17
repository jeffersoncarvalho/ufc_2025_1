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

module.exports = router