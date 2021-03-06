
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


// Ensures user input is valid, and change on snakeDirection variable
const changeDirection = newDirectionCode => {
    if(newDirectionCode == snakeCurrentDirection) return;

    if(newDirectionCode == LEFT_DIR && snakeCurrentDirection !== RIGHT_DIR){
        snakeCurrentDirection = newDirectionCode
    }  else if(newDirectionCode == UP_DIR && snakeCurrentDirection !== DOWN_DIR) {
        snakeCurrentDirection = newDirectionCode
    } else if (newDirectionCode == RIGHT_DIR && snakeCurrentDirection !== LEFT_DIR){
        snakeCurrentDirection == newDirectionCode
    } else if(newDirectionCode == DOWN_DIR && snakeCurrentDirection !== UP_DIR){
        snakeCurrentDirection == newDirectionCode
    }
}

// starting snake position onload
let currentHeadPosition = TOTAL_PIXEL_COUNT/2

// set intial length
let snakeLength = 100

// start moving snake, wrap around to other side of screen if needed
const moveSnake = () => {
    switch (snakeCurrentDirection) {
        case LEFT_DIR:
            --currentHeadPosition

            // check if position is at edge of board
            const isHeadAtLeft = currentHeadPosition % LINE_PIXEL_COUNT == 
            LINE_PIXEL_COUNT - 1 || currentHeadPosition < 0
            if(isHeadAtLeft){
                currentHeadPosition = currentHeadPosition + LINE_PIXEL_COUNT
            }
        break;
        case RIGHT_DIR:
            ++currentHeadPosition
            const isHeadAtRight = currentHeadPosition % LINE_PIXEL_COUNT == 0
            if(isHeadAtRight) {
                currentHeadPosition = currentHeadPosition - LINE_PIXEL_COUNT
            }
        break;
        case UP_DIR:
            currentHeadPosition = currentHeadPosition - LINE_PIXEL_COUNT
            const isHeadAtTop = currentHeadPosition < 0
            if(isHeadAtTop) {
                currentHeadPosition = currentHeadPosition + TOTAL_PIXEL_COUNT
            }
        break;
        case DOWN_DIR: 
            currentHeadPosition = currentHeadPosition + LINE_PIXEL_COUNT
            const isHeadAtBottom = currentHeadPosition > TOTAL_PIXEL_COUNT -1
            if(isHeadAtBottom) {
                currentHeadPosition = currentHeadPosition - TOTAL_PIXEL_COUNT
            }
        break;
        default:
        break;
            
    }

    // Accessed the correct pixel within the HTML collection
    let nextSnakeHeadPixel = gameBoardPixels[currentHeadPosition]

    // Check if snake head is about to intersect with its own body
    if (nextSnakeHeadPixel.classList.contains('snakeBodyPixel')) {
        clearInterval(moveSnakeInterval)
        alert(`You have eaten ${totalFoodEaten} food and traveled ${totalDistanceTraveled} blocks.`)
        window.location.reload()
    }

    // assuming empty pixel, add snake body styling
    nextSnakeHeadPixel.classList.add('snakeBodyPixel')

    // remove snake styling to keep snake appropriate length
    setTimeout(() => {
        nextSnakeHeadPixel.classList.remove('snakeBodyPixel')
    }, snakeLength)

    // describes what to do if snakes encounters food pixel
    if (currentHeadPosition == currentFoodPosition) {
        totalFoodEaten++
        document.getElementById('pointsEarned').innerText = totalFoodEaten
        snakeLength = snakeLength + 100
        createFood()
    }

    // added distance traveled count
    totalDistanceTraveled++
    document.getElementById('blocksTraveled').innerText = totalDistanceTraveled
}


// call initial function to create board and start game
createGameBoardPixels();

createFood();

// set animation speed
let moveSnakeInterval = setInterval(moveSnake, 100)

addEventListener('keydown', e => changeDirection(e.keyCode))


// adding variables for on-screen buttons
const leftButton = document.getElementById('#leftButton')
const rightButton = document.getElementById('#rightButton')
const upButton = document.getElementById('#upButton')
const downButton = document.getElementById('#downButton')

// add listeners for on-screen buttons
leftButton.onclick = () => changeDirection(LEFT_DIR)
rightButton.onclick = () => changeDirection(RIGHT_DIR)
upButton.onclick = () => changeDirection(UP_DIR)
downButton.onclick = () => changeDirection(DOWN_DIR)