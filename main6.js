//#Day5.ts
let Frutas=[String('banana, '), 'tomate, ', String('maçã, '), String('uva, '), String("abacate")];
var  laticinios=[String('leite vegetal ,') , String('leite de vaca, ') , String("leite em pó ")];
let doces=["chiclete, ","bala de ursinho"];
let Lista_de_compras=[Frutas,laticinios,doces];
// log1 apelido de console.log
let log1= console.log
imprimirlista();
//lista de compras no console
function imprimirlista(){
console.log("Lista de compras:");
//sL = sublista
var sL=0;
console.log(Lista_de_compras[sL][0]+Lista_de_compras[sL][1]+Lista_de_compras[sL][2]+Lista_de_compras[sL][3]+Lista_de_compras[sL][4])

//laticineos
console.log("Laticinos:")
//sL = sublista
//troca pra segunda sublista
 sL=1;
console.log(Lista_de_compras[sL][0]+Lista_de_compras[sL][1]+Lista_de_compras[sL][2]);
//parte dos congelados da lista
console.log("congelados:")
//chiclete e bala de ursinho
console.log("Doces:")
//troca pra terceira sublista, a sublista de doces
sL=2;
console.log(Lista_de_compras[sL][0]+Lista_de_compras[sL][1]);
}
//a perime da lista é ovalor de adicionar ou não o segundo é uma condição pra checar se valor é valido,pou sejá difernet de undefined e Not anumber
let adicionar =prompt("Adicionar mesagem a lista?");
console.log("Outros");
console.log(adicionar)
//condição se != Nan e != undefined retornar true sen~ça oflase
let checar2=(adicionar != NaN &&  adicionar != undefined );
//se condição checar2 ===verdadeio adicionar item senão retorna mensagem de erro
let pesq=false;
function pesquisar(item){
  //pesquisando se encontrado true verdediro se não é false

pesq =(Frutas.includes(item) || laticinios.includes(item) || doces.includes((item)))
if(pesq===false ){
  return('Item não está na lista')
}
else {
let  apague=item;
//se está nã lista defurtas
var setaemfrutas=Frutas.includes(item);
//seháoitem ,input ,condição há em Frutas
let  index='';
let matriz="";
console.log("Item em Frutas:"+setaemfrutas);
if (setaemfrutas==true) {
  //pesquisa indice por palavra na lista
  index=Frutas.indexOf(String(item));
matriz="Frutas";
}

//valor ,if tá em frutas,Frutas[index];
//condição pra laticinios
let setaemlaticineo=( laticinios.includes(item)===true   ? "laticinio" : false ) 
if (setaemlaticineo !== false ) {
 
  index=laticinios.indexOf(String(item));
  apaguelaticinios(pesquisar('leite vegetal ,')[2])
  matriz='laticinios';
}


let setaemdoces=(doces.includes(item)===true ? "doces" : "Não está em doces")
if (setaemdoces=="doces"){
  index=doces.indexOf(String(item))
  matriz=String(setaemdoces)
}




var pesqEapague=[apague,matriz,index];
//apagando
return pesqEapague;
}
//pesquisando frutas
//após valide ar ese exite eu preciso apagar
//pesquisar[textopequesao][]
}

function apagartudo(item)
{
  let setaemdoces=(doces.includes(item)===true ? "doces" : "Não está em doces")
  let setaemlaticineo=( laticinios.includes(item)===true   ? "laticinio" : false ) 
  if (setaemdoces===true) {
  
  apagueDoces(pesquisar(item)[2])
}
if (setaemlaticineo===true) {
  apaguelaticinios(pesquisar(item)[2])
}

else {
  apagueFrutas(pesquisar(item)[2])
  
}
  
}



function apagueDoces(index) {
  
  //ditado.value
  //filtro pra garantir que numero
  doces[index]="";
   console.log(doces); // [1, 2, 4, 5] 
}
function apagueFrutas(index){

  //ditado.value
  //filtro pra garantir que numero
  Frutas[index]="";
   console.log(Frutas); // [1, 2, 4, 5]
  
} 
function apaguelaticinios(index){
  
  //ditado.value
  //filtro pra garantir que numero
  laticinios[index]="";
  //log1 apelido pra console.log
   log1(laticinios); // [1, 2, 4, 5]
  
} 


/*
  function apagar(init=prompt("digite item pra apagar")){
    let resultado=init;
  Frutas[item]="";
  }
  */
  
  //Espero que isso ajude!
  
  /*
  
  https://pt.stackoverflow.com/questions/108032/remover-um-elemento-especifico-do-array-javascript
  
  https://qastack.com.br/programming/2003815/how-to-remove-element-from-an-array-in-javascript
  
  https://www.javascriptprogressivo.net/2019/01/Matriz-Declarar-Criar-Inicializar-Exibir-Alterar-Apostila.html?m=1
  
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  */