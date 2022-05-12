
// declare global variables to track game board size
const LINE_PIXEL_COUNT = 40
const TOTAL_PIXEL_COUNT = LINE_PIXEL_COUNT**2

// Track scores to display to user
let totalFoodEaten = 0;
let totalDistanceTraveled = 0;

// Shorten reference to game board
const gameContainer = document.getElementById('gameBoard')

// Generate game board
const createGameBoardPixels = () => {
    for (let i = 1; i <= TOTAL_PIXEL_COUNT; i++){
        gameContainer.innerHTML = `${gameContainer.innerHTML}<div
        class="gameBoardPixel" id = "pixel${i}"></div>`; 
    }
}

// shorten refernce to game pixels
const gameBoardPixels = document.getElementsByClassName('gameBoardPixel')

let currentFoodPosition = 0

// Create the randomly generated food items in the game board
const createFood = () => {
gameBoardPixels[currentFoodPosition].classList.remove('food')
currentFoodPosition = Math.floor(Math.random() * TOTAL_PIXEL_COUNT)
gameBoardPixels[currentFoodPosition].classList.add('food')
}

// Set up Snake Behavior

const LEFT_DIR = 37
const UP_DIR = 38
const RIGHT_DIR = 39
const DOWN_DIR = 40

let snakeCurrentDirection = RIGHT_DIR
