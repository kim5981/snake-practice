const canvas = document.querySelector("#snake-game")

// canvas 2d context -- drawn in 2d space
const ctx = canvas.getContext("2d") 

// starts at (20, 20)
let speed = 7
let tileCount = 20
let tileSize = 18
let x = 10
let y = 10

function drawGame(){

    clearScreen()
    drawSnake()
    moveSnake()
    drawApple()
    checkCollision()
    // let speed = 7
    // setTimeout(drawGame, 1000/speed) // update screen 7x a second
    
}


function drawSnake(){
    ctx.fillStyle = "white"
    ctx.fillRect(x * tileCount, y * tileCount, tileSize, tileSize)
}

const snakeBits = []
let tailLength = 2

function checkCollision(){
    if(appleX == x && appleY == y){
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)
    }
}

function clearScreen(){ // fill with black
    ctx.fillStyle = "black" 
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

// change snake direction
let xSpeed = 0
let ySpeed = 0

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
    x = x + xSpeed
    y = y + ySpeed
}


// apple variables

let appleX = 5
let appleY = 5

function drawApple(){
    ctx.fillStyle = "red"
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
}



drawGame()