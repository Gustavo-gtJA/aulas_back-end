/***********************************
    * Objetivo: Calcular medias escolares
    * Data: 29/01/2026
    * Autor: Marcel
    * Versão: 1.0
************************************/
/*
Existem tres formas de criar uma variavel:

    var -> permite a criaçáo de um espaço na memoria do tipo variavel,
    foi muito utilizados em projetos antigos Recomendado para criar variaveis globais
    (inicio do código caso queira usar).

    let -> Permite a criaçáo de um espaço na memoria do tipo variavel a utilixaçpao
    deste padrão é para a criação dentro de blocos de programaçaõ {}.
    essa variável nasxe e morre dentro do bloco.
    não é recomendado a sua utilização em espaço global.

    const -> permite a criação de um espaço na memotia onde não sofrera mudança durantee o código
    pode ser utilizada dentro e fora do bloco {}.dica: caso queira diferenciar uma const de um var ou um let,
     A const você pode criar com a letra MAIUSCULA.
*/

// Import da biblioteca
const readline = require('readline')

//cria o objeto para a entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //recebe o nome do aluno que foi digitado
    let nomeAluno = nome
    if(nomeAluno == '') {
    }

    // recebendo os valores das notas
    entradaDeDados.question('Digite a primeira nota: ', function(nota1){
        let valor1 = nota1

        entradaDeDados.question('Digite a segunda nota: ', function(nota2){
            let valor2 = nota2

            entradaDeDados.question('Digite a terceira nota: ', function(nota3){
                let valor3 = nota3

                entradaDeDados.question('Digite a quarta nota: ', function(nota4){
                    let valor4 = nota4

                    /*
                        Operadores de comparação

                        == -> permite comparar a igualdade de dois conteúdos
                        < -> permite comparar valores menores
                        > -> permite comparar valores maiores
                        >= -> permite comparar valores maiores ou iguais
                        <= -> permite comparar valores menores ou maiores
                        != -> permite comparar a diferença entre conteúdos
                        !== -> permite compar a diferença do conteúdo e a igualdade de tipos de dados
                        ==! -> permite comparar a igualdade do conteúdo e a diferença dos tipos de dados
                        === -> permite comparar o conteúdo e a tipagem de dados
                        !=! -> permite comparar a difenrença de conteúdos e a diferença dos tipos de dados
                        
                        Operadores lógico
                        E -> AND -> &&
                        OU -> OR -> ||
                        NÂO -> NOT -> !
                        */ 

                    if(nomeAluno == '' || valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {
                        console.log('ERRO: é obrigatório o preenchimento de todos os dados!!!')
                    }else if(valor1 < 0 && valor1 >100 ||
                         valor2 < 0 && valor2 >100 ||
                          valor3 < 0 && valor3 > 100 ||
                           valor4 < 0 && valor4 > 100 ){
                            console.log('Os números devem ser de 0 a 100!!!')
                           
                           }else{
                                
                                let soma = Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)
                                let media = Number(soma) / 4
                                console.log()
                                console.log('------------------------')
                                console.log('O nome do aluno é: ' + nomeAluno)
                                console.log('As notas foram: ' + nota1 +','+ nota2 + ',' + nota3 + ',' + nota4)
                                console.log('A media foi: ' + media)
                                console.log('------------------------')

                           }
                           
                })
            })
        })
    })
})