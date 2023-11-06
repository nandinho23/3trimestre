function tocaSomPom(idElementoAudio){
  document.querySelector (idElementoAudio).play();

 if (element === null) {
  alert('Elemento não encontrado');
}
  if (elemento && elemento.localName === 'audio'){
    elemento.play();
  }else {
    alert('Elemento não encontrado');
  }
}
    const listaDeTeclas = document.querySelectorAll('.tecla');

      for(let contador = 0; contador < listaDeTeclas.length;contador++) {
           const tecla = listaDeTeclas[contador];
           const instrumento = tecla.ClassList[1]
           const idAudio = `#som_${instrumento}`;
           console.log(idAudio);
          console.log(instrumento);

          tecla.onclick = function(){
              tocaSomPom(idAudio);
          }
          tecla.onkeydown= function(evento){
            if(evento.code ==='Enter' || evento.code ==='Space'){
            tecla.classList.add('ativa');
          }
          tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
          }
          console.log(contador)
          }
          }
         

        
          
      
  