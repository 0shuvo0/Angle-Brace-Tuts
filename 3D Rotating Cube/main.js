var cube = document.querySelector('.cube')

window.addEventListener('mousemove', function(e){
	var x = e.clientX | 0;
	var y = e.clientY | 0;
	cube.style.transform = 'rotateX(' + -y + 'deg) rotateY(' + -x + 'deg)'
})

window.addEventListener('touchmove', function(e){
	var x = e.touches[0].clientX | 0;
	var y = e.touches[0].clientY | 0;
	cube.style.transform = 'rotateX(' + -y + 'deg) rotateY(' + -x + 'deg)'
})