const runGridButton = document.querySelector(".gridButton");
runGridButton.addEventListener("click", createGrid);

const container = document.querySelector(".container");
let containerSize = 960;
let squaresPerSide = 16;
let pixelSize = 960 / squaresPerSide;

function createGrid() {
    container.style.cssText = "display: flex; flex-wrap: wrap; height: 960px; width: 960px; border: 2px solid red;";
    for (let i = 0; i < (Math.pow(squaresPerSide, 2)); i++) {
        let loopPixel = document.createElement("div");
        loopPixel.className = "gridClass";
        container.appendChild(loopPixel);
    }

    gridArray = [...document.querySelectorAll(".gridClass")];
    gridArray.forEach(pixel => {
        pixel.style.cssText = "width: " + pixelSize + "px; height: " + pixelSize + "px; margin: 0px; border: 2px solid black; box-sizing: border-box";
    });       
}

