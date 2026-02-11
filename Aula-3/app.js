/*
**********************************************
*objetivo: Criar um sistema que permite o calculo de 
juros utilizando boas práticas com função
*Autor:Marcel
*Data:11/02/26
*Versão:1.0
**********************************************
*/ 
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
//entrada do cliente
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    //entrada do nome do produto
    entradaDeDados.question('digiten o nome do produto: ',function(produto){
        let nomeProduto = produto

        //entrada capital
        entradaDeDados.question('Digite o valor da compra: ', function (capital) {
            let capitalProduto = capital

            //entrada taxa
            entradaDeDados.question('Digite a taxa de juros a ser aplicada: ', function(taxaProduto){
                let taxaCompra = taxaProduto

                //entrada tempo
                entradaDeDados.question('Digite o tempo de pagamento: ', function(tempo){
                    let tempoPagto = tempo
                    let montante = calcularJurosComposto(capitalProduto, taxaCompra, tempoPagto)

                    if(montante){
                        console.log('O montante final é: ' + montante.toFixed(2))

                    }else{
                        entradaDeDados.close
                    }

                })
            })
            
        })
    })
})

//criando uma função para calcular o valor da compra parcelada
//metodo tradicional
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
//calcula o percentual de numero
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
