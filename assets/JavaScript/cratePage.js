function createPage(img) {
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
    createSpan.innerText = "Escolha sua jogada";
    main.appendChild(createSpan);
}