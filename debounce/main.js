let button = document.querySelector('button')

function debounce(fn, delay) {
    let timer = null
    return function(...args) {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            fn(...args)
            timer = null
        }, delay)
    }
}

function throttle(fn, delay) {
    let timer = null
    return function(...args) {
        if(timer){
            return
        }
        timer = setTimeout(function() {
            fn(...args)
            timer = null
        }, delay)
    }
}


// function handleClick() {
//     console.log('Button clicked')
// }

let handleClick = debounce(function(msg) {
    console.log('Button clicked', msg)
}, 500)

// function handleMouseMove() {
//     console.log('Mouse moved')
// }

let handleMouseMove = throttle(function() {
    console.log('Mouse moved')
}, 50)

button.addEventListener('click', function() {
    handleClick("HEllo")
})
window.addEventListener('mousemove', handleMouseMove)