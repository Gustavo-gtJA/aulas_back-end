/*
*Arquivo responsável pelas funções de calculos para esta projeto
*Autor:Gustavo Teixeira
*data:11/02/26


*/

function calcularJurosComposto(valorCompra, taxaDeJuros, tempoPagto){
    //recebe os argumentos das funções em variaveis locais
    // as variaveis valor, taxa, tempo, são númericas por conta da converção
    // mas os argumentos valorCompra, taxaDeJuros e tempoPagto ainda serão strings
    let valor = Number(valorCompra)
    let taxa = Number(taxaDeJuros)
    let tempo = Number(tempoPagto)

    // validação para entradas vazias ou de caracteres inválidos
    if(valorCompra == '' || isNaN(valorCompra || tempoPagto == '' || isNaN(tempoPagto))){
        console.log('ERO: valor de compra ou erro de pagamento estão incorretos')
        return false
    }else{

    // chama para converter o número em percentual
    let percentual = calcularPercentual(taxa)

    // validação para o erro do percentual ma função calcularPercentual
    if(percentual){
        let montante = valor * ((1+percentual)**tempo)
        return Number(montante.toFixed(2))
    }else{
        console.log('ERRO: valor da taxa está incorreto')
        return false
    }
}


}


function calcularPercentual (numero) {
    let numeroPercentual = Number(numero)
    

    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false // não pode processar
    }else{
        // procesamento do calculo do percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
    }

}

//tornando as duas funções publicas para este projeto
module.exports = {calcularJurosComposto, calcularPercentual}