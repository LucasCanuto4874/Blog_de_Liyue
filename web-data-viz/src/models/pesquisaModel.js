var database = require("../database/config");

function buscarUltimasPesquisas() {

    var instrucaoSql = `SELECT elementoFav FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasPesquisas,
}
