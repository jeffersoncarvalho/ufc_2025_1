var express = require('express');
var router = express.Router();


const ProfessorService = require("../services/professor.service");

router.get( "/listar",
    (request, response, next) => {
        response.json(ProfessorService.list());
    }
 )

module.exports = router;