const listaLivros = require("../lista-de-arrays/array")

function encontraMenores(pivo, array){
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];
        if(produtoAtual.preco < pivo.preco){
            menores++;
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}

function trocaLugar(array, de, para){
    let elem1 = array[de]
    let elem2 = array[para]

    array[de] = elem2
    array[para] = elem1
}

function dividePivo(array){
    let pivo = array[Math.floor(array.length/2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for(let analise = 0; analise < array.length; analise++){
        let atual = array[analise];
        if(atual.preco < pivo.preco && atual !== pivo){
            trocaLugar(array, analise, valoresMenores);
            valoresMenores++;
        }
    }
    return array
}

//
//console.log(encontraMenores(listaLivros[2], listaLivros));
//console.log(dividePivo(listaLivros));

module.exports = trocaLugar;