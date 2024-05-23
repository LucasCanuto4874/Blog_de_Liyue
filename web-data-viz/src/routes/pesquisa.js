var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.get("/ultimas/", function (req, res) {
    pesquisaController.buscarUltimasPesquisas(req, res);
});

module.exports = router;