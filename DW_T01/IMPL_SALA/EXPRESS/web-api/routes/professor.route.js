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
    "/criar",
    (request, response) => {
        //console.log(request.body)
        const novoProfessor = ProfessorService.criar(request.body)
        response.json(novoProfessor)
    }
)

router.get(
    "/recuperar/:id",
    (request, response) => {
        const professor = ProfessorService.recuperar(request.params.id)
        response.json(professor)
    }
)

module.exports = router;