var express = require('express');
var router = express.Router();


const ProfessorService = require("../services/professor.service");
const { request } = require('../app');

router.get("/listar",
    (request, response, next) => {
        response.json(ProfessorService.list());
    }
)

router.post("/criar",
    (request,response) => {
        const professorResposta = ProfessorService.criar(request.body)
        response.json(professorResposta)
    }
)

router.get("/recuperar/:id",
    (request, response) => {
        const professor = ProfessorService.recuperar(request.params.id)
        response.json(professor)
    }
)
 

module.exports = router;