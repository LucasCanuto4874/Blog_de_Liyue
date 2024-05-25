function obterDadosGrafico() {

    fetch(`/pesquisa/ultimas/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

var contador_Cryo = 0
var contador_Hydro = 0
var contador_Anemo = 0
var contador_Geo = 0
var contador_Pyro = 0
var contador_Dendro = 0
var contador_Eletro = 0

var dadosElementos = []

function plotarGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    var lista_elementos = resposta

    // Criando estrutura para plotar gráfico - dados


    const ctx = document.getElementById('myChart');

    if(grafico){
        grafico.destroy()
    }
   var grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cryo', 'Hydro', 'Anemo', 'Geo', 'Pyro', 'Dendro', 'Eletro'],
            datasets: [{
                label: 'Qual o elemento mais adorado?',
                data: dadosElementos,
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico

    for (var i = 0; i < resposta.length; i++) {
        var lista_elementos = resposta[i].elementoFav

        if (lista_elementos.indexOf("Cryo") != -1) {
            contador_Cryo++
        }
        else if (lista_elementos.indexOf("Hydro") != -1) {
            contador_Hydro++
        }
        else if (lista_elementos.indexOf("Anemo") != -1) {
            contador_Anemo++
        }
        else if (lista_elementos.indexOf("Geo") != -1) {
            contador_Geo++
        }
        else if (lista_elementos.indexOf("Pyro") != -1) {
            contador_Pyro++
        }
        else if (lista_elementos.indexOf("Dendro") != -1) {
            contador_Dendro++
        }
        else {
            contador_Eletro++
        }
    }
    dadosElementos.push(contador_Cryo, contador_Hydro, contador_Anemo, contador_Geo, contador_Pyro, contador_Dendro, contador_Eletro);


    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Dados:')
    console.log(lista_elementos)
    console.log('----------------------------------------------')

    // setTimeout(() => atualizarGrafico(resposta, dados, myChart), 2000);
}

