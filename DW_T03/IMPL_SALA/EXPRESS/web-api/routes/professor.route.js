var express = require('express');
const ProfessorService = require('../services/professor.service');
var router = express.Router();

router.get(
    "/listar",
    (request, response) => {
        response.json(ProfessorService.listar())
    }
)

module.exports = router