const imagensPainel = document.querySelectorAll('.imagem-painel'); 
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let  imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach(imagem => {
    imagemAtual.classList.remove('mostrar');
  });
}

function mostrarImagem() {
  imagemPainel[imagemAtual].classList.add('mostrar');
}


btnAvancar.addEventListener('click', function() {
  const totalDeImagens = imagensPainel.length -1;
  if(imagemAtual === totalDeImagens) {
    return;
  }

   imagemAtual++;

   esconderImagens();
   mostrarImagem();
});


btnVoltar.addEventListener('click', function() {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconderImagens();
  mostrarImagem();
});




/* <--------------------DESCRIÇÃO--------------------->*/
/* quando clicar na seta avançar, temos que esconder todas as imagens e mostrar a próxima imagem  */

/* testa se o contador de imagemAtual é igual ao total de imagens */

 /* a imagem atual começa em 0 pq é a primeira imagem
   assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem */

    /* esconder todas as imagens
       pegar todas as imagens usando o DOM e remover a class mostrar */

        /* mostrar a próxima  imagem
       pegar todas as imagens, descobrir qual é a próxima, e colocar a class msotrar nela */