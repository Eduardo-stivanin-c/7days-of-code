//gerando por Arie Ai DO Opera e pmexi qiue faltou
console.log("1)soma")
console.log("2)menos")
console.log("3)dividir")
console.log("4)multiplicar")
// Solicitando ao usuário que digite três valores
let soma = prompt("Digite o soma valor 1:");
let soma2=prompt("Digite o soma  valor 2:");

let menos = prompt("Digite o menos valor 1:");
let menos2 = prompt("Digite o menos valor 2:");
let multi = prompt("Digite o  vezes valor 1:");
let multi2 = prompt("Digite o  vezes valor 2:");
let dividir1 =prompt("Digite o  divididir valor 1:");
let dividir2 =prompt("Digite o  divididir valor 2:");

// Exibindo os valores inseridos pelo usuário
//console.log("Valor soma:",adicionar(soma,soma2);
//console.log("Valor menos:", subtrair(menos,menos2));
//console.log("Valor multiplicar:", multiplicar(multi,multi2));
//console.log("Valor dividir:", dividir(dividir1,dividir2));

// Função para adicionar dois números


function adicionar(num1, num2) {
  return num1 + num2;
}

// Função para subtrair dois números
function subtrair(num1, num2) {
  return num1 - num2;
}

// Função para multiplicar dois números
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Função para dividir dois números
function dividir(num1, num2) {
  return num1 / num2;
}

// Exemplo de uso da calculadora
let resultadoSoma = adicionar(soma,soma2);
console.log("Resultado da soma: " + resultadoSoma);

let resultadoSubtracao = subtrair(menos,menos2);
console.log("Resultado da subtração: " + resultadoSubtracao);

let resultadoMultiplicacao = multiplicar(multi,multi2);
console.log("Resultado da multiplicação: " + resultadoMultiplicacao);

let resultadoDivisao = dividir(dividir1,dividir2);
console.log("Resultado da divisão: " + resultadoDivisao);

/*referencias
Claro! Aqui está um exemplo de um código de calculadora simples em JavaScript:

// Função para adicionar dois números
function adicionar(num1, num2) {
  return num1 + num2;
}

// Função para subtrair dois números
function subtrair(num1, num2) {
  return num1 - num2;
}

// Função para multiplicar dois números
function multiplicar(num1, num2) {
  return num1 * num2;
}
//edu diz:gerado pro Ai do OPera abaixo

// Função para dividir dois números
function dividir(num1, num2) {
  return num1 / num2;
}

// Exemplo de uso da calculadora
let resultadoSoma = adicionar(5, 3);
console.log("Resultado da soma: " + resultadoSoma);

let resultadoSubtracao = subtrair(10, 4);
console.log("Resultado da subtração: " + resultadoSubtracao);

let resultadoMultiplicacao = multiplicar(2, 6);
console.log("Resultado da multiplicação: " + resultadoMultiplicacao);

let resultadoDivisao = dividir(20, 5);
console.log("Resultado da divisão: " + resultadoDivisao);

/*Referências bibliográficas:


https://www.w3schools.com/jsref/met_win_prompt.asp

https://developer.mozilla.org/pt-BR/
https://cursos.alura.com.br/course/javascript-objetos/task/115756
Flanagan, David. JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language. O'Reilly Media, 2020.
Duckett, Jon. JavaScript and JQuery: Interactive Front-End Web Development. Wiley, 2014.
Resig, John. Secrets of the JavaScript Ninja. Manning Publications, 2012.*/
