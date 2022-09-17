const hexs = [
    "#ccccccff",
    "#e6e6e6ff",
    "#f2f2f2ff",
    "#ffffffff",

    "#000000ff",
    "#1a1a1aff",
    "#333333ff",
    "#4d4d4dff",    

    "#ff0000ff",
    "#ff2a2aff",
    "#ff5555ff",
    "#ff8080ff",

    "#ff6600ff",
    "#ff7f2aff",
    "#ff9955ff",
    "#ffb380ff",

    "#ffcc00ff",
    "#ffd42aff",
    "#ffdd55ff",
    "#ffe680ff",

    "#ccff00ff",
    "#d4ff2aff",
    "#ddff55ff",
    "#e5ff80ff",

    "#66ff00ff",
    "#7fff2aff",
    "#99ff55ff",
    "#b3ff80ff",

    "#00ccffff",
    "#2ad4ffff",
    "#55ddffff",
    "#80e5ffff",

    "#0066ffff",
    "#2a7fffff",
    "#5599ffff",
    "#80b3ffff",

    "#0000ffff",
    "#2a2affff",
    "#5555ffff",
    "#8080ffff",

    "#6600ffff",
    "#7f2affff",
    "#9955ffff",
    "#b380ffff",

    "#d42affff",
    "#dd55ffff",
    "#e580ffff",
    "#eeaaffff",
]

let currentColor = "black";
let isMouseDown = false;


// START--------------------------Create Colors--------------------------
const colorSelection = document.querySelector(".colors-container");

for (let i = 0; i < hexs.length; i++) {
    const colorOption = document.createElement("div");
    colorOption.classList.add("color");
    colorOption.style.backgroundColor = hexs[i];

    colorOption.addEventListener("click", e => {
      currentColor = hexs[i];
    });

    colorSelection.appendChild(colorOption);
}
// END--------------------------Create Colors--------------------------



// START--------------------------Sketching--------------------------
  const board = document.querySelector(".board");
  const width = 660;
  const height = 660;
  let length = 4;
  let size = length ** 2;

  for (let i = 0; i < size; i++) {
    const unit = document.createElement("div");    
    unit.classList.add("unit");
    unit.style.flex = `1 0 ${(1/Math.sqrt(size)) * 100}%`;

    unit.addEventListener("mousedown", onMouseClick);
    unit.addEventListener("mousemove", onMouseMove);

    board.appendChild(unit);
  }


  function onMouseMove(e) {
    if (isMouseDown)
      this.style.backgroundColor = currentColor;
  }

  function onMouseClick(e) {
    this.style.backgroundColor = currentColor;
  }

  document.body.addEventListener("mousedown", e => {
    isMouseDown = true;
  });

  document.body.addEventListener("mouseup", e => {
    isMouseDown = false;
  });

  // END--------------------------Sketching--------------------------