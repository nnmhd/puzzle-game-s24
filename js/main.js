console.log("JS is connected");
// --  Bug fixed by Natchanon Nate Mahaittidon w/ @rational --//

// variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
  puzzleBoard = document.querySelector(".puzzle-board"),
  puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
  // @ Add Puzzle Container to access the puzzle pieces (class = puzzle-pieces)
  puzzleContainer = document.querySelector(".puzzle-pieces"),
  // @ Accessing to the reset button
  resetButton = document.querySelector("#resetBut"),
  dropZones = document.querySelectorAll(".drop-zone");
let draggedPiece;

console.log(theButtons);
console.log(puzzleBoard);

// functions

function changeBGImage() {
  // @ Remove the placed puzzles from the Puzzle Board
  dropZones.forEach((zone) => {
    while (zone.firstChild) {
      zone.removeChild(zone.firstChild);
    }
  });

  // @ To change the puzzle pieces following the thumbnail
  puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg'`;
  puzzlePieces[0].src = `images/topLeft${this.id}.jpg`;
  puzzlePieces[1].src = `images/topRight${this.id}.jpg`;
  puzzlePieces[2].src = `images/bottomLeft${this.id}.jpg`;
  puzzlePieces[3].src = `images/bottomRight${this.id}.jpg`;

  //  @ Add a Puzzle Container for picked image's puzzle pieces
  puzzlePieces.forEach((piece) => {
    puzzleContainer.appendChild(piece);
  });
}

function handleStartDrag() {
  console.log(`started dragging ${this}`);
  draggedPiece = this;
}

function handleOver(e) {
  e.preventDefault();
  console.log("Dragged Over");
}

function handleDrop() {
  this.appendChild(draggedPiece);
}

// @ Add function to reset game, all of positions have reset to default
function resetGame() {
  dropZones.forEach((zone) => {
    while (zone.firstChild) {
      zone.removeChild(zone.firstChild);
    }
  });

  // @ To reset all the puzzle pieces and board to the first image as start
  puzzlePieces[0].src = `images/topLeft0.jpg`;
  puzzlePieces[1].src = `images/topRight0.jpg`;
  puzzlePieces[2].src = `images/bottomLeft0.jpg`;
  puzzlePieces[3].src = `images/bottomRight0.jpg`;
  puzzleBoard.style.backgroundImage = `url('../images/backGround0.jpg'`;

  puzzlePieces.forEach((piece) => {
    puzzleContainer.appendChild(piece);
  });
}

// eventListeners

theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);

dropZones.forEach((zone) => zone.addEventListener("dragover", handleOver));

dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));

// @ Add the event listener for reset button, click to call resetGame()

resetButton.addEventListener("click", resetGame);
