//ELEÉ APENAS O TEXOT DO CAMPO
let campotexto=document.getElementById('campo').value;
//lista de botões


let teclas=document.getElementsByClassName('btn-Primary')
//GAMIBARA CRIA A FLASA PROpriedade formula pra facilitar os codiogs
//teclas[0].formula="DIV(";
//NÃO PODE SER O PRIMEIRO DA LISTA QUE DA BUG
teclas[0].formula="DIV(";
teclas[1].formula="MULT(";
teclas[2].formula="MENOS(";
teclas[3].formula="SOMA(";

//tecla jogar na meoria da calculadora
teclas[13].formula=(campo.value="")
//teclas[3].formula="SOMA(";
//memorida calculadora
let  memoriadacalculadora=document.querySelectorAll('.memoriacalculadora')

/*
var txt ="&b=";
var campo2=document.getElementById('campo2');
var txt2="&c=";
var campo3=document.getElementById('campo3');
var txt3 ="&d=";
var campo4=document.getElementById('campo4');
var txt4 ="&e=";
var campo5=document.getElementById('campo5');
var txt5 ="&f=";
var campo6=document.getElementById('campo6');
var txt6 ="&g=";
var campo7=document.getElementById('campo7');
*/
//define converte em numero pra que o seistema recoça
function convertpranumero(){
let convertnumber = Number(campo.value)
console.log(convertnumber)
/// console.log sóescreve no copnsoleo
}


//recebe valor do botão  input.value  do  botão precisonado na varivael botoes
//faz o teclado virtual funcionar funcioinadr
for ( let contador=0;contador< teclas.length;contador++) {

	teclas[contador].onclick=function()
	{
	configteclado(teclas[contador],contador) ;
	//adicionapra calculo o primieor valor se operçaõ =vazio na memoria 2

 if (memoriadacalculadora[1].value==="" &&  campo.value==Number(campo.value) ) {
	memoriadacalculadora[0].value=campo.value
 }

  };
  //acessa o console do navegador
	console.log(contador);
//gambiara pra suportar formula

}

function configteclado(botoes,contador2){
//condição pra atribuir pra formula do botão
//se for + aescrever SOMA( 	senão escrever  escrever o valor no input

//let sesomar=(botoes.value== "+" ? campo.value+="SOMA(" :   campo.value+= String(botoes.value) )
//   condição se if  tecla.value != de indefinido        escreve o valor da formula na campo senão aescreva o vlaor de value
let setemformula=(teclas[contador2].formula !== undefined  ? campo.value+= teclas[contador2].formula : campo.value+= String(botoes.value) )

//se formula diferente de indefinido  guarde na segudna meomoria

let setemformula_calc2=(teclas[contador2].formula !== undefined  ? memoriadacalculadora[1].value= teclas[contador2].formula : false )
//campo é o valor é campo de texto da calculadora

//se for numero e memoria 0 da caluladora = vazia recebe numero digitado
let senumero=(teclas[contador2].value==Number(teclas[contador2.value]) && memoriadacalculadora[0] == "" ? memoriadacalculadora[0] = campo.value: false)


/*
if( senumero ===true &&  memoriadacalculadora[0] == ""){

	   memoriadacalculadora[0]=campo.value
	 }

*/
return  botoes
}
function calcular(contador2,teclas) {
	if(teclas[contador2].formula !== undefined && memoriadacalculadora[1] ==="" ){

		memoriadacalculadora[1] = String(botoes.formula)

		}

	 //se a primeia memoria estiver ocupaada ele paega a terceira
	 if( senumero ===true &&  memoriadacalculadora[0] !== ""){

	   memoriadacalculadora[2]=campo.value
	 }



}


//chupa ideias de formula do Excel pras 4 formulas baiscas que professora Rafaela mandiou fazer
//copiando atpé o nome da formula do EXcel apelidapocomo funççoes minhas

function SOMA(x,y){

return (x + y)
}

function MENOS(x,y){
return (x - y)
}


function MULT(x,y){
return (x  *  y)
}
function DIV(x,y){
return (x  /  y)
}




//mensagem de na tela
demo.innerHTML="Operações disponiveis soma,menos,multiplicação,divisão"
/*
function igual_click() {
 rodar(campo.value)
function rodar(input){
  console.log(input)
  }
}
//se for numero e memoria 0 da caluladora = vazia recebe valor do botão


//*
/*function confignumero(){
campo.value=campo.value + setInterval(1)
//configurnado teclas de numero0 des  de que a teclada de 1 em diante esteja em order crensencte na calculadora
}
*/
/*
Alura
https://pt.stackoverflow.com/questions/256620/calculadora-em-javascript-html
Mean%20Full%20stack%20JavaScript%20para%20aplicações%20web%20com%20MongoDB,%20Express,%20Angular%20e%20Node%20(Flávio%20Almeida)
https://support.microsoft.com/pt-br/office/vis%C3%A3o-geral-de-f%C3%B3rmulas-no-excel-ecfdc708-9162-49e8-b993-c311f47ca173
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects
Desenvolva Jogos com HTML 5 Canvas e Javascript Éderson Cassio
https://support.microsoft.com/pt-br/office/mult-fun%C3%A7%C3%A3o-mult-8e6b5b24-90ee-4650-aeec-80982a0512ce
*/
