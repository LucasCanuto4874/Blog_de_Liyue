var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

router.get("/mostrar/:idQuadradoClicado", function (req, res) {
    publicacaoController.mostrar(req, res);
});
module.exports = router;