const hexs = [
    "#ff80ed",
    "#065535",
    "#000000",
    "#133337",
    "#ffc0cb",
    "#ffffff",
    "#ffe4e1",
    "#008080",
    "#ff0000",
    "#e6e6fa",
    "#ffd700",
    "#ffa500",
    "#00ffff",
    "#ff7373",
    "#0000ff",
    "#40e0d0",
    "#d3ffce",
    "#c6e2ff",
    "#b0e0e6",
    "#f0f8ff",
]

const colorSelection = document.querySelector(".colors-selection");

for (let i = 0; i < hexs.length; i++) {
    const colorOption = document.createElement("div");
    colorOption.classList.add("color");
    colorOption.style.backgroundColor = hexs[i];
    colorSelection.appendChild(colorOption);
}
