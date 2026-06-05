const shareBtn = document.querySelector('.share-button');

shareBtn.addEventListener('click', function() {
    // Alterna uma classe caso queira manter aberto no clique em dispositivos mobile
    this.classList.toggle('active');
    
    // Log para teste
    console.log("Botão de compartilhamento clicado!");
});
