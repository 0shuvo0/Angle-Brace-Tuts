var dino = document.querySelector('.dino')
var cactus = document.querySelector('.cactus')
var scoreBoard = document.querySelector('.score span')
var restartBtn = document.querySelector('.restart-btn')

var jumped = false
var score = 0
var dinoHeight = 75,
	dinoWidth = 70
var cactusOffsetTop = cactus.offsetTop

function jump(){
	if(jumped) return
	dino.classList.add('jump')
	jumped = true
	setTimeout(function(){
		dino.classList.remove('jump')
		jumped = false
	}, 800)
}

window.addEventListener('click', function(){
	jump()
})
window.addEventListener('keyup', function(e){
	if(e.key === " "){
		jump()
	}
})

function check(){
	if(cactus.offsetLeft <= 10 + dinoWidth && cactus.offsetLeft > 10){
		if(dinoHeight + dino.offsetTop > cactus.offsetTop){
			document.querySelector('.game').classList.add('lost')
			restartBtn.style.display = "block"
			return
		}
	}
	score++
	scoreBoard.innerText = score
	requestAnimationFrame(check)
}
check()





restartBtn.addEventListener('click', function(){
	document.querySelector('.game').classList.remove('lost')
	restartBtn.style.display = 'none'
	score = 0
	scoreBoard.innerText = score
	check()
})











