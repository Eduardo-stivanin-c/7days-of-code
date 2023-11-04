//#Day5.ts
let Frutas=[String('banana, '), 'tomate, ', String('maçã, '), String('uva, '), String("abacate")];

var  laticinios=[String('leite vegetal ,') , String('leite de vaca, ') , String("leite em pó ")];
let doces=["chiclete, ","bala de ursinho"];
let Lista_de_compras=[Frutas,laticinios,doces];



//lista de compras no console
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

//a perime da lista é ovalor de adicionar ou não o segundo é uma condição pra checar se valor é valido,pou sejá difernet de undefined e Not anumber
let adicionar =prompt("Adicionar mesagem a lista?");

//condição se != Nan e != undefined retornar true sen~ça oflase
let checar2=(adicionar != NaN &&  adicionar != undefined );
//se condição checar2 ===verdadeio adicionar item senão retorna mensagem de erro
if (checar2 === true) {
    console.log("Outros:");
    console.log(adicionar);

}

//se apertou cancelar  retone vazio a lista de outros 
else {
    console.log("Outros:");
  
}