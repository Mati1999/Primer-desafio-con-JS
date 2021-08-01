const boton = document.querySelectorAll(".flecha");
const perfil = document.querySelector(".perfil");
const share = document.querySelector(".share");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);

if (windowWidth < "1200") {
    boton.forEach(element => {
        element.addEventListener("click",() => {
            perfil.classList.toggle("desaparecer");
            share.classList.toggle("desaparecer");
        })
    })
} else if (windowWidth >= "1200") {
    boton.forEach(element => {
        element.addEventListener("click",() => {
            share.classList.toggle("desaparecer");
        })
    });
}



