let modelos = document.querySelectorAll('img');
let modalCard = document.querySelectorAll('.slideModelo')
let botao = document.querySelector('#botao-fechar');

for(let i=0; i<modelos.length; i++){
    
    modelos[i].addEventListener('click', funcaoPrincipal);
    
    function funcaoPrincipal() {
        for (let x=0; x<modalCard.length; x++){
            console.log(i);
            if(i==2) {
                modalCard[0].classList.toggle('modal-troca');
            }
            if(i==7) {
                modalCard[1].classList.toggle('modal-troca');
            }
            if(i==12) {
                modalCard[2].classList.toggle('modal-troca');
            }
            if(i==17) {
                modalCard[3].classList.toggle('modal-troca');
            }
            if(i==22) {
                modalCard[4].classList.toggle('modal-troca');
            }
            if(i==27) {
                modalCard[5].classList.toggle('modal-troca');
            }
            if(i==32) {
                modalCard[6].classList.toggle('modal-troca');
            }
            if(i==37) {
                modalCard[7].classList.toggle('modal-troca');
            }
            if(i==42) {
                modalCard[8].classList.toggle('modal-troca');
            }
            if(i==47) {
                modalCard[9].classList.toggle('modal-troca');
            }
        }
    }
}

botao.addEventListener('click', fechaModal, false);

function fechaModal() {
    modalCard[0].classList.toggle('modal-troca')
}