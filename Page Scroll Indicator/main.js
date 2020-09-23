var indicator = document.querySelector('.scroll-indicator .progress')
var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener('scroll', function(){
	var scrollTop = document.documentElement.scrollTop
	var scrolled = (scrollTop / scrollHeight) * 100
	indicator.style.width = scrolled + '%'
})