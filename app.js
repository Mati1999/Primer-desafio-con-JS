const boton = document.querySelectorAll(".flecha");
console.log(boton);
const perfil = document.querySelector(".perfil");
const share = document.querySelector(".share");


boton.forEach(element => {
    element.addEventListener("click",() => {
        perfil.classList.toggle("desaparecer");
        share.classList.toggle("desaparecer");
    })
});

