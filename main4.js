let numerochutado=Number(prompt("Em qual numero o PC 'pensou'?"));


//filtor passa pelo valor filtor praasaber see numero se for texto vai dar Not a Number então na condição vai da falso
let filtro=Number(numerochutado);


//valor chutado term valor igual do filtro e do mesmo tipo E numerochutado<=9 E >-1
let valorénumero=(numerochutado ===filtro && numerochutado <10 &&  numerochutado >=0 );



//gerarnumeros aleatorios inteiros

let  opcoesnumericas='0123456789';

 function gerarnumero(){


    //gera texto pra opção de garar senha 
	return opcoesnumericas[Math.floor(Math.random() *(opcoesnumericas.length))]


}
 //execuntado a função de gerar numeros aleatorios
 const meumenu=document.querySelectorAll(".enviar");


 let valorénumeroptbr="Não";

 document.write("<center id='menunatela'>");

 
//se valor chutado verdadeiro exibir na tela

 if (valorénumero==true) {
    document.write("<h2> Este valor é valido? Sim </h2>");
    document.write("valor Chutado:" +numerochutado );


    document.write("<BR>"+ "Range do número aleátorio  de "+opcoesnumericas[0] +' até '   + opcoesnumericas.length);

} 


else {
    document.write("<h2> Este valor é valido? Não </h2>");
    alert("Range do número aleátorio  de "+opcoesnumericas[0] +' até '   + opcoesnumericas.length)
    console.log("Erro");
}
//numero sorteado
let numerosorteado=gerarnumero();
//condição se  numerosorteado == não estrito a numerochutado
var  acertou=(numerosorteado==numerochutado);


document.write("<BR>"+ " número aleátorio  sorteado " +numerosorteado );

let msg="<BR> acertou : ";
if (acertou===true) {
    //trica pr portugues ao  verdeiro ou falso
    document.write( msg  + "sim" );
} 
//se errou e a tentativa foi valor valido
if (acertou===false && valorénumero==true ) {
    document.write( msg  + "não" );
}
else {
console.log("Erro");    

}

document.write("</center>");

//deptectando pelo hashtag
//location.href[location.host.length + 8]
/// day3.html e #  
var hashtaggameover = location.href.slice(location.host.length + 8,Infinity)
let hashnumero = hashtaggameover[10];

//se hastag for 1 ou 2 retorne
var tentativa = (hashnumero==1 || hashnumero==2);

//marca no cookie que já ásspu uma vez

function numerotentativas(){
    

  //se for  cookie ==1 não estrito pode ser texto 1 então redireciona da primera vez só cria o cookie fora dessa função
  
  if ( document.cookie ==1  ) {
    location.href="day4Gameover";  
      
    }



}
document.cookie =1;




//referencias
//https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math
//https://pt.stackoverflow.com/questions/115113/como-criar-um-cookie-em-javascript