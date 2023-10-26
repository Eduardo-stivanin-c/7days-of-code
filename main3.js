
var  cidade="";
//const Roma_Coliseo="";
//var  cidade_SP=String("day3/pexels-caio-45917.jpg");


const meumenu=document.querySelectorAll(".cidade");



//imagem remota pra amaenizar o problmea d desempenho do site ser lento porque imagnes locais lentifica

var carregarimagens=[      String("day3/pexels-wal-lod-14615839.jpg") , String ('day3/pexels-caio-45917.jpg'),String( "day3/pexels-filippo-bergamaschi-2767739.jpg")];

//,String( "day3/pexels-filippo-bergamaschi-2767739.jpg")
//pegando os botões

<<<<<<< HEAD
=======

const cidade_SP="day3/pexels-caio-45917.jpg";
//const imagens = Roam_coliseu  , cudiade de São Pulao fot
const imagens="day3/pexels-wal-lod-14615839.jpg",cidade_SP;
>>>>>>> e2813d6a8e5eb7ca81306aa3d4f2cc79fe076deb
var imagem="";
//for (){
  /**/

/*
if (cidade === “Roma”){
    // mostre a foto do “Coliseu”
mostrarfoto();
}
*/
//}
/**/


function mostrarfoto(ID_imagem){
  //se id na nas lista de imanges for nulo ou < -0 akertara de id invalido
 /* if (Number(ID_imagem)===null || ID_imagem < 0 ){
    alert("ID invalido pra imagem");
  }
  */
 
//trocafumdo da div
foto.src= String(carregarimagens[ID_imagem]);

  
  //mostra que foi achada a foto
return foto.src
}




for ( let contador=0;contador< meumenu.length;contador++) {
 
  meumenu[contador].onclick=function(){
    
  mostrarfoto(contador);


     
};
//acessa o console do navegador
  console.log(contador);
}

