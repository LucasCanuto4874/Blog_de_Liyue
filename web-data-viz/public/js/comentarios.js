// publicando comentarios
function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;

    if(idUsuario == undefined){
        alert(`Crie uma conta ou faça o login`)
        window.location.href = "login.html"
        return false  //porque o return false impede a pagina do cannot post? (aquela pagina em branco)
    }
    else{
        var corpo = {
            descricao: form_postagem.descricao.value,
            fkPublicacao: idQuadradoClicado
        }
    
        fetch(`/avisos/publicar/${idUsuario}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpo)
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
                window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    
        return false;
    }
}

// Exibindo comentarios das postagens 
function atualizarComentarios() {
    fetch(`/avisos/listarPorIdPubli/${idQuadradoClicado}`)
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    var FeedComent = document.getElementById("feed_comentarios");
                    FeedComent.className = "resultados"
                    FeedComent.innerHTML = "";

                    for (let i = 0; i < resposta.length; i++) {
                        var comentarios = resposta[i];

                        // Criação e manipulação dos elementos HTML via JavaScript
                        var divPostagem = document.createElement("div");
                        var nomeUser = document.createElement("h1");
                        var divComentarios = document.createElement("div");
                        var textComentarios = document.createElement("h2");

                        nomeUser.innerHTML = comentarios.nome;
                        textComentarios.innerHTML = comentarios.descricao;

                        divPostagem.className = "postagens";
                        divComentarios.className = "textoComentario";
                        nomeUser.classList = "nomePostagem"
                        textComentarios.classList = "letras_comentarios"


                        FeedComent.appendChild(divPostagem);
                        FeedComent.appendChild(divComentarios);
                        divPostagem.appendChild(nomeUser);
                        divComentarios.appendChild(textComentarios);
                    }
                });
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
        });
}

// atualizando os comentarios a cada 1 segundo
function iniciarComentarios(){
    atualizarComentarios()
    setInterval(atualizarComentarios(), 1000)
}
