
function perdeu(i) {
    const span = document.createElement("span");
    jogaPc(i);
    span.innerText = "Você Perdeu...";
    main.appendChild(span);
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}

function venceu(i) {
    const span = document.createElement("span");
    jogaPc(i);
    span.innerText = "Você Ganhou!";
    main.appendChild(span);
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}

function empate(i) {
    const span = document.createElement("span");
    jogaPc(i);
    span.innerText = "Empate";
    main.appendChild(span);
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}