const canvas = document.querySelector("#snake-game")

// canvas 2d context -- drawn in 2d space
const ctx = canvas.getContext("2d") 

// starts at (20, 20)
let tileCount = 20
let tileSize = 18
let x = 10
let y = 10

function drawGame(){

    clearScreen()
    drawSnake()

    // let speed = 7
    // setTimeout(drawGame, 1000/speed) // update screen 7x a second
    
}


function drawSnake(){
    ctx.fillStyle = "white"
    ctx.fillRect(x * tileCount, y * tileCount, tileSize, tileSize)
}

function clearScreen(){ // fill with black
    ctx.fillStyle = "black" 
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

// change snake direction
let xSpeed = 0
let ySpeed = 0

document.addEventListener("keydown", keydown)

function keydown(e){
    //up
    if(e.keyCode==38){
        ySpeed = -1 // one tile up
        xSpeed = 0
    }
    
    //down
    if(e.keyCode==40){
        ySpeed = 1 // one tile down
        xSpeed = 0
    }
    
    //left
    if(e.keyCode==37){
        ySpeed = 0
        xSpeed = -1 // one tile left
    }
    
    //right
    if(e.keyCode==39){
        ySpeed = 0
        xSpeed = 1 // one tile right
    }
}

drawGame()