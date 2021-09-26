const canvas = new fabric.Canvas('canvas', {
    width: 500,
    height: 500,
    backgroundColor: '#fff'
})

let file = document.getElementById('file')

file.addEventListener('change', function(){
    let img = file.files[0]
    if(!img){
        return
    }
    let reader = new FileReader()

    reader.onload = function(e){
        let data = reader.result
        fabric.Image.fromURL(data, function(img){
            canvas.add(img)
            if(img.width > canvas.width){
                img.scaleToWidth(canvas.width)
            }
        })
        console.log(data)
    }

    reader.readAsDataURL(img)
})

let addTextBtn = document.getElementById('addText')
let text = document.getElementById('text')
let color = document.getElementById('color')

addTextBtn.addEventListener('click', function(){
    let _text = new fabric.Text(text.value, {
        left: 100,
        top: 100,
        fontSize: 20,
        fill: color.value
    })
    canvas.add(_text)
})

window.addEventListener('keydown', function(e){
    if(e.key == "Delete"){
        canvas.remove(canvas.getActiveObject())
    }
})

let saveBtn = document.getElementById('save')
saveBtn.addEventListener('click', function(){
    let data = canvas.toDataURL()
    let link = document.createElement('a')
    link.href = data
    link.download = 'image.png'
    link.click()
})