

const key = "e5d1c0a8fa9b2d67d17a291407ddcf0b"

function colocarDadosNatela(dados) {
    console.log(dados)

}

async function buscarCidade(cidade) {
    const dados = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then( resposta => resposta.json())
   
    colocarDadosNatela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".digite").value

    buscarCidade(cidade)
}
