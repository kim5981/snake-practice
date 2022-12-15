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

let tileSize = canvas.clientWidth/tileCount-2
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


// game pieces

function drawGame(){

    moveSnake()

    // game over

    let result = gameOver()
    if(result){
        return;
    }

    clearScreen()
    drawSnake()
    drawApple()

    checkCollision()
    setScore()
    setTimeout(drawGame, 1000/speed) // update screen 7x a second
    
}

function gameOver(){
    
    let over = false

    if( ySpeed == 0 && xSpeed == 0 ) return false;
    if( 
        headX < 0 || 
        headY < 0 ||  
        headX === tileCount || 
        headY === tileCount  
    ){
         over = true
    }
    
    for(let i= 0; i < snakeBits.length; i++){
        let bit = snakeBits[i]
        if(bit.x === headX && bit.y === headY){
            over = true
            break
        }
    }
    // game over text
    if(over){
        ctx.fillStyle="red"
        ctx.font="50px verdana"
        ctx.fillText("Game Over! ", canvas.clientWidth/6.5, canvas.clientHeight/2)
    }

    return over
}


function drawSnake(){
    ctx.fillStyle = "yellow"

    for(let i=0; i < snakeBits.length; i++){
        let bit = snakeBits[i]
        ctx.fillRect(bit.x * tileCount, bit.y * tileCount, tileSize, tileSize)
    }
    snakeBits.push(new snakeBit(headX, headY))
    if(snakeBits.length > tailLength){
        snakeBits.shift()
    }

    ctx.fillStyle="green"
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}

function drawApple(){
    ctx.fillStyle = "red"
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
}


// detection functions

function checkCollision(){
    if(appleX == headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)
        tailLength++
        score++
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


// change snake direction with keys

document.body.addEventListener("keydown", keydown)

function keydown(){
    //up
    if(event.keyCode==38){
        if(ySpeed == 1) return;
        ySpeed = -1 
        xSpeed = 0
    }
    
    //down
    if(event.keyCode==40){
        if(ySpeed == -1) return;
        ySpeed = 1 
        xSpeed = 0
    }
    
    //left
    if(event.keyCode==37){
        if(xSpeed == 1) return;
        ySpeed = 0
        xSpeed = -1 
    }
    
    //right
    if(event.keyCode==39){
        if(ySpeed == -1) return;
        ySpeed = 0
        xSpeed = 1
    }
}

function moveSnake(){
    headX = headX + xSpeed
    headY = headY + ySpeed
}





drawGame()