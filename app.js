const button = document.querySelector(".flecha");
console.log(button);
const perfil = document.querySelector(".perfil");
const share = document.querySelector(".share");

button.addEventListener("click",() => {
    perfil.classList.toggle("desaparecer");
    share.classList.toggle("desaparecer");
})