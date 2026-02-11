const { exit } = require('process')
var readline = require('readline')
const { isNumberObject } = require('util/types')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Entrada de dados
entradaDeDados.question('Favor digitar seu nome: ', function(nomeUsuario){
    let usuario = nomeUsuario
    entradaDeDados.question('Favor digitar nome do produto: ', function(nomeProduto){
        let produto = nomeProduto
    

         entradaDeDados.question('Favor digite o valor da compra: ', function(valorDaCompra){
             let preçoCompra = valorDaCompra

             entradaDeDados.question('favor insire a taxa de juros: ', function(taxaJuros){
                //diminuir risco de erro por conta de digitação mão esperada
                 let valorJuros = taxaJuros
                 if(taxaJuros < 1){
                    taxaJuros = taxaJuros*100
                
                 }

                 entradaDeDados.question('favor insira o tempo do pagamento: ', function(tempoFornecido){
                      let tempoUsuario = tempoFornecido

                     entradaDeDados.question('Digite 1 caso o tempo tenha cido fornecido em meses' +
                           'e digite 2 caso tenha sido fornecido em anos: ', function(convertendoTempo){
                            // Resolução de erro por caracter indevido e converção de anos em meses
                            let tempoMeses
                        
                             if (convertendoTempo == 2){                
                               tempoMeses = tempoFornecido * 12
                               }else if (convertendoTempo == 1){
                                  tempoMeses = tempoFornecido
                           

                        }else{
                            
                            console.log(`\n**********************************************************************
                                \n ERRO: Números menores que 1 e maiores que 2 não são aceitos
                                \n **********************************************************************`
                            )
                            process.exit(0)
                        }
                        //Contas para calcular o valor final
                        let taxaConvertida = Number(taxaJuros)/100 + 1 
                        const valorTotal = Number(valorDaCompra) * Number(taxaConvertida) ** Number(tempoMeses)
                        let valorParcela = valorTotal / tempoMeses
                        let acrescimo = valorTotal - valorDaCompra
                        
                        //Resolução de erro adicionais
                        if(nomeUsuario == '' || valorDaCompra == '' || tempoMeses == '' || valorParcela == '') {
                            console.log(`\n**********************************************************************
                                \n ERRO: é obrigatório o preenchimento de todos os dados!!
                                \n **********************************************************************`
                            )
                            process.exit(0)

                        }else if (isNaN(valorDaCompra) || isNaN(tempoFornecido) || isNaN(taxaJuros)){
                            console.log(`\n**********************************************************************
                                \n ERRO: O valor da compra, taxa e o tempo não pode conter letras!
                                \n **********************************************************************` 
                            )
                            process.exit(0)
                        }else if(!isNaN(nomeUsuario) || !isNaN(nomeProduto) ){

                            console.log(`\n**********************************************************************
                                \n ERRO: Não é permitido números no nome de usuário e no nome do produto!
                                \n **********************************************************************` 
                            )
                            process.exit(0)
                        }
                        
                        //Parte visível para o pagamento

                        console.log(`\n -----------------------Viva Moda-----------------------
                            \n Muito Obrigado por realizar a sua compra conosco Sr(a) ${nomeUsuario}
                            \n A compra do produto ${nomeProduto}  tem o valor de R$${valorDaCompra}
                            \n A compra será parcelada em  ${tempoMeses} Vezes de R$${valorParcela.toFixed(2)}
                            \n O acréscimo será de R$  ${acrescimo.toFixed(2)}
                            \n O valor total será de R$ ${valorTotal.toFixed(2)}
                            \n
                            \nMuito obrigado por escolher a Viva Moda
                            \n-----------------------------------------------------------------`)
                            
              

                       

                     })

            })

        })

    })

})
})