let containerSize = 960;
const inputText = document.querySelector("#item");
const container = document.querySelector(".container");

inputText.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        createGrid();
    }
});

const runGridButton = document.querySelector(".gridButton");
runGridButton.addEventListener("click", createGrid);

function createGrid() {
    const existingGrid = document.querySelector(".gridContainer");
    if (existingGrid) {
        container.removeChild(existingGrid);
    }

    if (inputText.value === "") {
        squaresPerSide = 20;
    } else if (+inputText.value > 100) {
        inputText.value = "";
        return alert("Please enter a number below 100");
    } else if (960 % +inputText.value === 0) {
        squaresPerSide = +inputText.value;
    } else {
        let inputNumberPlusOne = +inputText.value;
        let inputNumberMinusOne = +inputText.value;
        do {
            inputNumberPlusOne++
            inputNumberMinusOne--
            if (960 % inputNumberPlusOne === 0) {
                inputText.value = inputNumberPlusOne;
                squaresPerSide = inputNumberPlusOne;
                break;
            } else if (960 % inputNumberMinusOne === 0) {
                inputText.value = inputNumberMinusOne;
                squaresPerSide = inputNumberMinusOne;
                break;
            } 
        } 
        while (true);
    }

    let pixelSize = containerSize / squaresPerSide;

    const gridContainer = document.createElement("div");
    container.appendChild(gridContainer);
    gridContainer.className = "gridContainer";

    gridContainer.style.cssText = "display: flex; flex-wrap: wrap; height: 960px; width: 960px; border: 2px solid red;";
    for (let i = 0; i < (Math.pow(squaresPerSide, 2)); i++) {
        let loopPixel = document.createElement("div");
        loopPixel.className = "gridClass";
        gridContainer.appendChild(loopPixel);
    }

    gridArray = [...document.querySelectorAll(".gridClass")];
    gridArray.forEach(pixel => {
        pixel.style.cssText = "width: " + pixelSize + "px; height: " + pixelSize + "px; margin: 0px; box-sizing: border-box";
    });
    
    colorizeOnHover();
}

function colorizeOnHover() {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    let currentColorIndex = 0;

    const gridContainer = document.querySelector(".gridContainer");

    gridContainer.addEventListener("mousemove", (e) => {
        if (e.target.classList.contains("gridClass")) {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            e.target.style.backgroundColor = colors[currentColorIndex];
        }
    });
}
