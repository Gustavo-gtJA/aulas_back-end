//comentário e, linja
/*
comentario
   em
bloco
*/

//Imprime no terminal um comteúdo
console.log('testando print do console')

//permitir criar uma variavel
var nome = 'Gustavo'

console.log(nome)

//Formas de concatenar variaveis e textos
console.log('O nome do usuario é: ' + nome)
console.log(`O nome do usúario é: ${nome}`)

//import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//cria uma interface para entrada e saida de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*função para retornar o nome digitado no terminal
    O método question após a digitação chama sua função "CALL BACK"
     para entregar oque foi digitado no terminal, atráves do argumento
      nomedeUsuario*/
entradaDeDados.question('favor digitar seu nome: ', function(nomeUsuario){
    //Entrada de dados para o email
    entradaDeDados.question('Favor digirte seu email: ', function(emailUsuario){
        
        console.log('--------------------------')
        console.log('O nome do úsuario é: ' + nomeUsuario)
        console.log(`O email é : ${emailUsuario}`)
        console.log('--------------------------')

    })
})

