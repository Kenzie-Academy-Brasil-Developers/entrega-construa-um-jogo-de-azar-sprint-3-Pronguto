const main = document.querySelector("main");
const imgSrc = [
    {
        class: "pedra",
        img: "./assets/pedra.png",
        alternative: "pedra"
    },
    {
        class: "papel",
        img: "./assets/papel.png",
        alternative: "papel"
    },
    {
        class: "tesoura",
        img: "./assets/tesoura.png",
        alternative: "tesoura"
    }
];
createPage(imgSrc)
const select = document.querySelector("div");
const sumir = document.querySelectorAll("img");
const span = document.querySelector("span");
select.addEventListener("click", selected);

function jokenpo(movePlayer) {
    const contra = Math.floor(Math.random() * (3 - 0)) + 0;
    if (contra === movePlayer) {
        empate(contra)
    } else if (movePlayer === 0) {
        if (contra === 1) {
            perdeu(contra)
        } else {
            venceu(contra);
        }
    } else if (movePlayer === 1) {
        if (contra === 2) {
            perdeu(contra)
        } else {
            venceu(contra);
        }
    } else if (movePlayer === 2) {
        if (contra === 0) {
            perdeu(contra)
        } else {
            venceu(contra);
        }
    }
}