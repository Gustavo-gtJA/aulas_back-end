var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Favor digitar seu nome: ', function(nomeUsuario){
    let usuario = nomeUsuario

    entradaDeDados.question('Favor digite o valor da compra: ', function(valorDaCompra){
        let preçoCompra = valorDaCompra

        entradaDeDados.question('favor insire a taxa de juros: ', function(taxaJuros){
            let valorJuros = taxaJuros

            entradaDeDados.question('favor insira o tempo do pagamento: ', function(tempoFornecido){
                let tempoUsuario = tempoFornecido

                entradaDeDados.question('Digite 1 caso o tempo tenha cido fornecido em meses' +
                     'e digite 2 caso tenha sido fornecido em anos: ', function(convertendoTempo){
                        let tempoMeses
                        if (convertendoTempo == 2){                
                            tempoMeses = tempoFornecido * 12
                            console.log(tempoMeses)
                        }else if (convertendoTempo == 1){
                            tempoMeses = tempoFornecido
                            console.log(tempoMeses)

                        }
                        let taxaConvertida = taxaJuros/100
                        let taxaConta = Number(taxaConvertida) + 0,  
                        const valorTotal = valorDaCompra
                        

                     })

            })

        })

    })

})