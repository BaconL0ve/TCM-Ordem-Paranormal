//---------------------> Menu <---------------------
function estado() {
    var menuItens = document.querySelectorAll(".menuitem");
    var barra = document.getElementById("barrinha");

    // Verificar o valor de display apenas do primeiro elemento
    var firstMenuItemDisplay = menuItens[0].style.display || window.getComputedStyle(menuItens[0]).display;

    if (firstMenuItemDisplay === "none" || firstMenuItemDisplay === "") {
        menuItens.forEach(function(menuItem) {
            menuItem.style.display = "flex";
        });
        barra.classList.replace("fa-navicon", "fa-times");
    } else {
        menuItens.forEach(function(menuItem) {
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