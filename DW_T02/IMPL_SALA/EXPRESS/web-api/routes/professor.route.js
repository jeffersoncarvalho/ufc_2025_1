var express = require('express');
var router = express.Router();


const ProfessorService = require("../services/professor.service");

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
 

module.exports = router;