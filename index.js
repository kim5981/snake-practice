const canvas = document.querySelector("#snake-game")

// canvas 2d context -- drawn in 2d space
const ctx = canvas.getContext("2d") 


class snakeBit{
    constructor(x, y){
        this.x = x
        this.y = y
    }
}

// starts at (20, 20)
let speed = 7
let tileCount = 20

let tileSize = 18
let headX = 10
let headY = 10

//snake body array
const snakeBits = []
let tailLength = 2

let xSpeed = 0
let ySpeed = 0


let appleX = 5
let appleY = 5

let score = 0

function drawGame(){

    moveSnake()

    // game over

    clearScreen()
    drawSnake()
    drawApple()

    checkCollision()
    setScore()
    setTimeout(drawGame, 1000/speed) // update screen 7x a second
    
}


function drawSnake(){
    ctx.fillStyle = "white"

    for(let i=0; i < snakeBits.length; i++){
        let bit = snakeBits[i]
        ctx.fillRect(bit.x * tileCount, bit.y * tileCount, tileSize, tileSize)
    }
        snakeBits.push(new snakeBit(headX, headY))
}



function checkCollision(){
    if(appleX == headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)
        tailLength++
    }
}

function setScore(){
    ctx.fillStyle = "white"
    ctx.font = "14px verdena"
    ctx.fillText("Score: " + score, canvas.clientWidth-50, 10)
}

function clearScreen(){ // fill with black
    ctx.fillStyle = "black" 
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

// change snake direction


document.body.addEventListener("keydown", keydown)

function keydown(e){
    //up
    if(e.keyCode==38){
        if(ySpeed == 1) return;
        ySpeed = -1 // one tile up
        xSpeed = 0
        console.log("up")
    }
    
    //down
    if(e.keyCode==40){
        if(ySpeed == -1) return;
        ySpeed = 1 // one tile down
        xSpeed = 0
        console.log("down")
    }
    
    //left
    if(e.keyCode==37){
        if(xSpeed == 1) return;
        ySpeed = 0
        xSpeed = -1 // one tile left
        console.log("left")
    }
    
    //right
    if(e.keyCode==39){
        if(ySpeed == -1) return;
        ySpeed = 0
        xSpeed = 1 // one tile right
        console.log("right")
    }
}

function moveSnake(){
    headX = headX + xSpeed
    headY = headY + ySpeed
}


// apple variables


function drawApple(){
    ctx.fillStyle = "red"
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
}



drawGame()