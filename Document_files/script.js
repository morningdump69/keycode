let keyCode = document.getElementById("keycode")
let eventKey = document.getElementById("eventkey")
let eventCode = document.getElementById("eventcode")
let eventWhich = document.getElementById("eventwhich")

document.addEventListener("keypress", (event) =>{
    keyCode.textContent = event.keyCode
    eventKey.textContent = event.key
    eventCode.textContent = event.code
    eventWhich.textContent = event.charCode
})