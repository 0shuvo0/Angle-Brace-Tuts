function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}


let container = document.querySelector('.random-colors')

let MAX_LIMIT = window.innerWidth / 30

function generateColor(){
    for(let i = 0; i < MAX_LIMIT; i++){
        let color = randomColor()
        container.innerHTML += `
        <div class="random-color">
                <div class="color-box" style="background-color: ${color}"></div>
                <div class="color-data">
                    <div class="code">${color}</div>
                    <span class="btn" onClick="copyToClipboard('${color}')">&#128203;</span>
                </div>
            </div>
        `
    }
}

function copyToClipboard(color){
    navigator.clipboard.writeText(color)
}

generateColor()