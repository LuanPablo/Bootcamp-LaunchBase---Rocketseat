/*
Desafio 1-1: Primeiros passos com JS 

Sobre o desafio
Desafios para fortalecer alguns conceitos, entre eles:

Variáveis;
Condicionais;
Operadores.
Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;
A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura);
Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso;
*/

//Dados do usuário
const nome = "Bruna";
const peso = 53;
const altura = 1.62;

//Calcular IMC
const imc = (peso/(altura * altura))

//Exibir resultado
if(imc >= 30){
    console.log(`${nome}, você está acima do peso`)
}else{
    console.log(`${nome}, você não está acima do peso`)
}

/*
  
//Cálculo de IMC

const nome = 'Carlos'
const peso = 110
const altura = 1.88

const imc = peso / (altura * altura)

let message = ""

if (imc >= 30) {
    message = `${nome} você está acima do peso`
} else {
    message = `${nome} você não está acima do peso`
}

console.log(message)
*/