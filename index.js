const canvas = document.querySelector("#game")

// canvas 2d context -- drawn in 2d space
const ctx = canvas.getContext("2d") 

function drawGame(){
    clearScreen()
}

function clearScreen(){ // fill with black
    ctx.fillStyle = "black" 
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

drawGame()