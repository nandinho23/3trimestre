//a função que deve ser executada é tocaSom, mas que som? Nesse caso,será o pârametro  idElementoAudio.
//Ou seja,o endereço da tecla será procurado no html e reproduzido.

function tocaSom(idElementoAudio){
  const elemento = document.querySelector(idElementoAudio);
  if (elemento === null) {
  alert('Elemento não encontrado');
};
  if (elemento && elemento.localName === 'audio'){
    elemento.play();
  }else {
    alert('Elemento não encontrado');
  };
}
//queryselector encontra as informações da tecla pesquisada do documento
const listaDeTeclas = document.querySelectorAll('.tecla');
 //se o elemento pesquisado for igual  a "inexistente", o alerta de elemento não encontrado aparecerá.


      for(let contador = 0; contador < listaDeTeclas.length;contador++) {
           const tecla = listaDeTeclas[contador];
            //classList armazena todas as infromações do elemento pesquisado.
           const instrumento = tecla.classList[1]
           //o idAudio é responsavel por indentificar  o som do botao pesquisado.
           const idAudio = `#som_${instrumento}`;
           
           console.log(idAudio);
         //onclick significa" ao clicar na tecla" a função tocaSom será executada, o id daquele audio será buscado e reproduzido.
          tecla.onclick = function(){
              tocaSom(idAudio);
          };
          //onkeydown significa "quando a tecla estiver pressionada",nesse caso uma função será executada, e qual é essa função? É a estilização de mudança de cordo botao
          //quando as teclas Enter e Space  forem apertadas.
          tecla.onkeydown= function(evento){
           //se o elemento existir, a função play daquele elemento acontecerá, ou seja, a tecla será reproduzida.
            if(evento.code ==='Enter' || evento.code ==='Space'){
            tecla.classList.add('ativa');
          }
        };
        //onkeyup significa "quando a tecla estiver erguida, não pressionada",nesse caso , a função será removida.
          tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
          };
          console.log(instrumento);
      console.log(contador);
          }
          
         

        
          
      
  