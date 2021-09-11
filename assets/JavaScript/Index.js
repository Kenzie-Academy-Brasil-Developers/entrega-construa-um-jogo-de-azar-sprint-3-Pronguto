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
function createPage(img) {
    //     const createMain = document.createElement("main");
    //     body.appendChild(createMain);
    const createDiv = document.createElement("div");
    main.appendChild(createDiv);
    for (let i = 0; i <= 2; i++) {
        const createImg = document.createElement("img");
        createImg.classList.add(img[i].class);
        createImg.src = img[i].img;
        createImg.alt = img[i].alternative;
        createDiv.appendChild(createImg);
    }
    const createSpan = document.createElement("span");
    createSpan.innerText = "Escolha sua jogada"
    main.appendChild(createSpan);
}
createPage(imgSrc)
const select = document.querySelector("div");
select.addEventListener("click", selected);
const sumir = document.querySelectorAll("img");
const span = document.querySelector("span");
function selected(event) {
    // document.body.innerHTML = "";
    // main.innerText=""; 
    const imgs = event.target;
    span.classList.add("hidden");
    console.log(imgs.className);
    if (imgs.className === "pedra") {
        const escolhido = 0;
        sumir[1].classList.add("hidden");
        sumir[2].classList.add("hidden");
        jokenpo(escolhido);
    } else if (imgs.className === "papel") {
        const escolhido = 1;
        sumir[0].classList.add("hidden");
        sumir[2].classList.add("hidden");
        jokenpo(escolhido);
    } else if (imgs.className === "tesoura") {
        const escolhido = 2;
        sumir[0].classList.add("hidden");
        sumir[1].classList.add("hidden");
        jokenpo(escolhido);
    }
}

let countEmpate = 0;
let countPedra = 0;
let countPapel = 0;
let countTesoura = 0;
function jokenpo(movePlayer) {
    const contra = Math.floor(Math.random() * (3 - 0)) + 0;
    const imgPc = document.createElement("img");
    const span = document.createElement("span");

    if (contra === movePlayer) {
        if (countEmpate === 0) {
            countEmpate++;
            imgPc.src = imgSrc[movePlayer].img;
            select.appendChild(imgPc);
            span.innerText = "Empate";
            main.appendChild(span);
        } else {
            span.innerText = "Recaregue a página";
            main.appendChild(span);
        }
    } else if (movePlayer === 0) {
        if (contra === 1) {
            if (countPapel === 0) {
                countPapel++;
                imgPc.src = imgSrc[contra].img;
                select.appendChild(imgPc);
                span.innerText = "Você Perdeu...";
                main.appendChild(span);
            } else {
                span.innerText = "Recaregue a página";
                main.appendChild(span);
            }
        } else {
            if (countPapel === 0) {
                countPapel++;
                imgPc.src = imgSrc[contra].img;
                select.appendChild(imgPc);
                span.innerText = "Você Ganhou!";
                main.appendChild(span);
            } else {
                span.innerText = "Recaregue a página";
                main.appendChild(span);
            }
        }
    } else if (movePlayer === 1) {
        if (contra === 2) {
            if (countTesoura === 0) {
                countTesoura++;
                imgPc.src = imgSrc[contra].img;
                select.appendChild(imgPc);
                span.innerText = "Você Perdeu...";
                main.appendChild(span);
            } else {
                span.innerText = "Recaregue a página";
                main.appendChild(span);
            }
        } else {
            if (countTesoura === 0) {
                countTesoura++;
                imgPc.src = imgSrc[contra].img;
                select.appendChild(imgPc);
                span.innerText = "Você Ganhou!";
                main.appendChild(span);
            } else {
                span.innerText = "Recaregue a página";
                main.appendChild(span);
            }
        }
    } else if (movePlayer === 2) {
        if (contra === 0) {
            if (countPedra === 0) {
                countPedra++;
                imgPc.src = imgSrc[contra].img;
                select.appendChild(imgPc);
                span.innerText = "Você Perdeu...";
                main.appendChild(span);
            } else {
                span.innerText = "Recaregue a página";
                main.appendChild(span);
            }
        } else {
            if (countPedra === 0) {
                countPedra++;
                imgPc.src = imgSrc[contra].img;
                select.appendChild(imgPc);
                span.innerText = "Você Ganhou!";
                main.appendChild(span);
            } else {
                span.innerText = "Recaregue a página";
                main.appendChild(span);
            }
        }
    }
}