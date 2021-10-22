function selected(event) {
    const imgs = event.target;
    span.classList.add("hidden");
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
    imgs.style.pointerEvents="none";
}

function jogaPc(i) {
    const imgPc = document.createElement("img");
    imgPc.src = imgSrc[i].img;
    select.appendChild(imgPc);
}