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

                    //Import da biblioteca que realiza calculos financeiros
                    let calculos = require('./modulo/calculos')


                    let montante = calculos.calcularJurosComposto(capitalProduto, taxaCompra, tempoPagto)

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



