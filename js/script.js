// declarando os arrays

const cards = [];
cards.push(document.getElementById("card01"), document.getElementById("card02"), document.getElementById("card03"), document.getElementById("card04"), document.getElementById("card05"), document.getElementById("card06"), document.getElementById("card07"), document.getElementById("card08"), document.getElementById("card09"));
const modals = [];
modals.push(document.getElementById("modal01"), document.getElementById("modal02"), document.getElementById("modal03"), document.getElementById("modal04"), document.getElementById("modal05"), document.getElementById("modal06"), document.getElementById("modal07"), document.getElementById("modal08"), document.getElementById("modal09"));
const botoes = [];
botoes.push(document.getElementById("botao-fechar01"), document.getElementById("botao-fechar02"), document.getElementById("botao-fechar03"), document.getElementById("botao-fechar04"), document.getElementById("botao-fechar05"), document.getElementById("botao-fechar06"), document.getElementById("botao-fechar07"), document.getElementById("botao-fechar08"), document.getElementById("botao-fechar09"));

// laço para escutar clique nos cards específicos, abrir e fechar o modal

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', abreModal, false);
    botoes[i].addEventListener('click', fechaModal, false);

    function abreModal() {
        modals[i].setAttribute("id", "modal-troca");
    };

    function fechaModal() {
        modals[i].removeAttribute("id", "");
    };

    // fechar modal apertando no esc ou em clicando em qualquer lugar

    modals[i].addEventListener('click', function () {
        fechaModal();
    });

    window.onkeydown = function (event) {
        if (event.keyCode == 27) {
            modals[0].removeAttribute("id", "");
            modals[1].removeAttribute("id", "");
            modals[2].removeAttribute("id", "");
            modals[3].removeAttribute("id", "");
            modals[4].removeAttribute("id", "");
            modals[5].removeAttribute("id", "");
            modals[6].removeAttribute("id", "");
            modals[7].removeAttribute("id", "");
            modals[8].removeAttribute("id", "");
        }
    };
};