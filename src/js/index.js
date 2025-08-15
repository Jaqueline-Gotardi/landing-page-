const imagens = document.querySelectorAll('.imagem-painel');
const btnVoltar = document.getElementById('btn-voltar'); 
const btnAvancar = document.getElementById('btn-avancar');
let  imagemAtual = 0;

function esconderImagens() {
  imagens.forEach(imagem => {
    imagem.classList.remove('mostrar');
  });
}

function mostrarImagem() {
  imagens[imagemAtual].classList.add('mostrar');
}

 
btnAvancar.addEventListener('click', function() {
  if(imagemAtual !== imagens.length -1) {
    imagemAtual++;
  }

   esconderImagens();
   mostrarImagem();
})

btnVoltar.addEventListener('click', function() {
  if (imagemAtual !== 0) {
    imagemAtual--;
  }

  esconderImagens();
  mostrarImagem();
})




/* <--------------------DESCRIÇÃO--------------------->*/
/* quando clicar na seta avançar, temos que esconder todas as imagens e mostrar a próxima imagem  */

/* testa se o contador de imagemAtual é igual ao total de imagens */

 /* a imagem atual começa em 0 pq é a primeira imagem
   assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem */

    /* esconder todas as imagens
       pegar todas as imagens usando o DOM e remover a class mostrar */

        /* mostrar a próxima  imagem
       pegar todas as imagens, descobrir qual é a próxima, e colocar a class msotrar nela */