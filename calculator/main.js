let input = document.querySelector(".input")
let result = document.querySelector(".result")
let buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        let btn = button.innerText
        if(input.innerText == "0" && btn != ".") input.innerText = ""
        if(btn == "clear"){
            input.innerText = 0
        }else if(btn == "="){
            try{
                result.innerText = eval(input.innerText)
            }catch(e){
                result.innerText = "ERROR!"
            }
        }else{
            input.innerText += btn
        }
    })
})