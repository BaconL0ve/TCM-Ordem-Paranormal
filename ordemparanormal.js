document.documentElement.style.setProperty('--altura-documento', `${document.documentElement.scrollHeight}px`);

//---------------------> Menu <---------------------
function estado(ID) {
    var menuItens = document.querySelectorAll(".menuitem");
    var barra = document.getElementById("barrinha");
    var firstMenuItemDisplay = menuItens[0].style.display || window.getComputedStyle(menuItens[0]).display;

    if (firstMenuItemDisplay === "none" || firstMenuItemDisplay === "") {
        menuItens.forEach(function (menuItem) {
            menuItem.style.display = "flex";
        });
        barra.classList.replace("fa-navicon", "fa-times");
    } else {
        menuItens.forEach(function (menuItem) {
            menuItem.style.display = "none";
        });
        barra.classList.replace("fa-times", "fa-navicon");
    }
}

//---------------------> Transições <---------------------
const observer = new IntersectionObserver(entries => {

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= .25) {
            entry.target.classList.add("animado")
        }
    })
}, {
    threshold: [0, .25, .5, .75] //opções de quanto do elemento precisa
})
Array.from(document.querySelectorAll('[data-animar]')).forEach(element => {
    observer.observe(element)
})

function sobrepor() {
    var infoList = document.querySelectorAll(".sobreposicao");

    infoList.forEach(function (info) {
        if (info.style.display === "none" || info.style.display === "") {
            info.style.display = "flex";
            
        } else {
            info.style.display = "none";
        }
    });
}

/*
let Rituais = [
    {
        ID: 311,
        Nome: 'AMALDIÇOAR ARMA MORTE',
        Simbolo: 'Amal_Arma_311.webp',
        Execulcao: 'Padrão',
        Alcance: 'Toque',
        Alvo: '1 arma corpo a corpo ou um pacote de munição',
        Duracao: 'Cena',
        Efeito: 'Quando aprender este ritual, escolha um elemento entre Conhecimento, Energia, Morte e Sangue. Este ritual passa a ser do elemento escolhido. Você imbui a arma ou munições com o elemento, fazendo com que causem +1d6 de dano do tipo do elemento.',
        Dicente: '(+2PE)muda o bônus de dano para +2d6. Requer 2º círculo.',
        Verdadeiro: '(+5PE)muda o bônus de dano para +4d6. Requer 3º círculo e afinidade.',
        Resistencia: null
    },

    {
        ID: 312,
        Nome: 'CICATRIZAÇÃO',
        Simbolo: 'Cicatriza_312.webp',
        Execulcao: 'Padrão',
        Alcance: 'Toque',
        Alvo: '1 ser',
        Duracao: 'instantânea',
        Efeito: 'Você acelera o tempo ao redor das feridas do alvo, que cicatrizam instantaneamente. O alvo recupera 3d8+3 PV, mas envelhece 1 ano automaticamente.',
        Dicente: '(+2 PE): aumenta a cura para 5d8+5 PV. Requer 2º círculo.',
        Verdadeiro: '(+9 PE): muda o alcance para “curto”, o alvo para “seres escolhidos” e aumenta a cura para 7d8+7 PV. Requer 4º círculo e afinidade com Morte.a',
        Resistencia: null
    },

    {
        ID: 313,
        Nome: 'CONSUMIR MANACIAL',
        Simbolo: 'Cons_Manan_313',
        Execulcao: 'padrão',
        Alcance: 'pessoal',
        Alvo: 'você',
        Duracao: 'Caena',
        Efeito: 'Você suga uma pequena porção do tempo de vida de plantas, insetos e até mesmo do solo ao redor, gerando lodo e recebendo 3d6 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.',
        Dicente: '(+2 PE): muda os PV temporários recebidos para 6d6. Requer 2º círculo.',
        Verdadeiro: '(+5 PE): muda o alvo para “área: esfera com 6m de raio centrada em você” e a resistência para “Fortitude reduz à metade”. Em vez do normal, você suga energia de todos os seres vivos na área, causando 3d6 pontos de dano de Morte em cada um e recebendo PV temporários iguais ao dano total causado até o final da cena. Requer 3º círculo e afinidade.',
        Resistencia: null
    },

    {
        ID: 0,
        Nome: '',
        Simbolo: '',
        Execulcao: '',
        Alcance: '',
        Alvo: '',
        Duracao: '',
        Efeito: '',
        Dicente: '',
        Verdadeiro: '',
        Resistencia: ''
    },
]

// Função para preencher os elementos <p> no HTML com os dados do objeto
function preencherElementosComObjeto(objeto) {
    for (let chave in objeto) {
        // Verifica se o elemento HTML com o ID correspondente existe
        if (document.getElementById(chave) !== null) {
            document.getElementById(chave).innerText = objeto[chave];
        }
    }
}

// Função para encontrar um objeto por ID
function encontrarObjetoPorID(id) {
    return Rituais.find(objeto => objeto.ID === id);
}

// Exemplo: encontre o objeto com ID igual a 311 e preencha os elementos HTML
let objetoEncontrado = encontrarObjetoPorID(311);
if (objetoEncontrado) {
    preencherElementosComObjeto(objetoEncontrado);
}
*/

