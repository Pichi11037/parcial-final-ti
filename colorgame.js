var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();

}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        //squares[i].style.backgroundColor = colors[i];
        //add click listener to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //this.textContent === "Easy" ? numSquares = 3: numSquares = 6;  TERNARY OPERATOR
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    }
}



function reset() {

    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors to squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";

}


/*
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
*/

resetButton.addEventListener("click", function() {
    reset();
});

//colorDisplay.textContent = pickedColor;

function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        //change each color to match given color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];

    for (let i = 0; i < num; i++) {
        //add num random colors to array    
        arr.push(randomColor());
    }

    //return that array
    return arr;

}

function randomColor() {
    //pick a "red"
    var R = Math.floor(Math.random() * 256);
    //pick a "green"
    var G = Math.floor(Math.random() * 256);
    //pick a "blue"
    var B = Math.floor(Math.random() * 256);

    return "rgb(" + R + ", " + G + ", " + B + ")";
}