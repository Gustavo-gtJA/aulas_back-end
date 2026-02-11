var readline =  require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o valor do primeiro número: ', function(numero1){
    entradaDeDados.question('Digite o valor do segundo número: ', function(numero2){
        entradaDeDados.question('Digite o valor do terceiro número: ', function(numero3){

            var soma = Number(numero1) + Number(numero2) + Number(numero3)
            
            console.log()
            console.log('-----------------------------------')
            console.log('Os números escolhidos são: ' + numero1 + ',' + numero2 + ',' + numero3 )
            console.log('A soma dos três números são: ' + soma)
            console.log('-----------------------------------')
        })
    })
})