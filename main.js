function tocaSomPom(idElementoAudio){
  document.querySelector (idElementoAudio).play();
}


    const listaDeTeclas = document.querySelectorA11('.tecla');

    let contador = 0;
    //Estrutura de reptição - Enquanto
      listaDeTeclas[0].onclick = tocaSomPom;

      while(contador <listaDeTeclas.length){
           listaDReTeclas[contador].onclick = function(){
            tocaSom('#_tecla_splash');
           };
           contador= contador + 1;
          }
      
  