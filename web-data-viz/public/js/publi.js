// Quadrado com a função de ir para a outra pagina

function virarpagina(quadrado) {

    var idQuadrado = quadrado;
    var url = 'Pagina Historia.html?id=' + idQuadrado;
    window.location.href = url
}

function selecao() {
    var quadrado1 = document.getElementById('quadradoQ1');
    var quadrado2 = document.getElementById('quadradoQ2');
    var quadrado3 = document.getElementById('quadradoQ3');
    var quadrado4 = document.getElementById('quadradoQ4');

    quadrado1.addEventListener('click', function () {
        virarpagina(1)
    });

    quadrado2.addEventListener('click', function () {
        virarpagina(2)
    });

    quadrado3.addEventListener('click', function () {
        virarpagina(3)
    });

    quadrado4.addEventListener('click', function () {
        virarpagina(4)
    });
}

// Mostrando as publicacoes do banco de dados
function atualizarFeed() {

    // postagem do banco de dados
    fetch(`/publicacao/mostrar/${idQuadradoClicado}`)
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw new Error('Houve um erro na API!');
            }
        })
        .then(function (publicacoes) {
            console.log("Dados recebidos: ", JSON.stringify(publicacoes));
            var feed = document.getElementById("feed_container");
            feed.innerHTML = ``;

            // Criação dos elementos 
            for (var i = 0; i < publicacoes.length; i++) {
                var publicacao = publicacoes[i];
                if (publicacao && publicacao.texto) {
                    var conteudo = document.createElement("div");
                    var textoPubli = document.createElement("p");
                    textoPubli.textContent = publicacao.texto;
                    conteudo.className = "conteudo";
                    conteudo.appendChild(textoPubli);
                    feed.appendChild(conteudo);
                }
            }
        })
        .catch(function (erro) {
            console.error(erro);
        });
}






