const canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let balls = []

function runder(){
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for(let i = 0; i < balls.length; i++){
        draw(balls[i])
        animate(balls[i], i)
    }

    requestAnimationFrame(runder)
}

function draw(ball){
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.arc(ball.x, ball.y, 5, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()
}

function animate(ball, i){
    ball.y += ball.vy

    if(ball.y > window.innerHeight){
        balls.splice(i, 1)
    }
}

runder()

window.addEventListener("mousemove", function(e){
    balls.push({
        x: e.clientX,
        y: e.clientY,
        vy: Math.random() * 3 + 2
    })
    console.log(balls)
})