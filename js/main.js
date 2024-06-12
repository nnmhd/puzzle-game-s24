console.log("JS is connected")

// variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
puzzleBoard = document.querySelector(".puzzle-board"),
puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
dropZones = document.querySelectorAll(".drop-zone");
let draggedPiece;

console.log(theButtons);
console.log(puzzleBoard);

// functions

function changeBGImage() {
    console.log(this.id)
    // background-image: url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url('../images/backGround${this.id}.jpg'`;
    // Method 2
    console.log(event.currentTarget.id)
    puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg'`;
}

function handleStartDrag() {
    console.log(`started dragging ${this}`)
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("Dragged Over");
}

function handleDrop() {
    this.appendChild(draggedPiece);
}

// eventListeners

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));