

const key = "e5d1c0a8fa9b2d67d17a291407ddcf0b"

function colocarDadosNatela(dados) {
    console.log(dados)
    document.querySelector(".tempo").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".nublado-2").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".nublado").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
   
    colocarDadosNatela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".digite").value

    buscarCidade(cidade)
}
