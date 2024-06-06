// sessão
function validarSessao() {
    var id = sessionStorage.ID_USUARIO;

    if (id == null) {
        alert(`Não existe um usuario logado, Por favor faça login!`)
    }
    else{
        limparSessao()
    }
    
}

function limparSessao() {
    alert(`Sessão Desconectada, Volte Sempre!`)
    sessionStorage.clear();
}


