let card = document.querySelector('.cardimg');
let modal = document.querySelector('.slideModelo');
let botao = document.querySelector('#botao-fechar');


// card.addEventListener('click', abreModal, false);

function abreModal() {
    modal.classList.toggle('modal-troca')
}

botao.addEventListener('click', fechaModal, false);

function fechaModal() {
    modal.classList.toggle('modal-troca')
}