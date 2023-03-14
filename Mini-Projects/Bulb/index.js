// TOGGLE BULB ON AND OFF


const bulbOn = document.querySelector("#on")
const bulbOff = document.querySelector("#off")

document.querySelector("#myBtn").onclick = function() {

    if( bulbOn.style.display=="block"){
        bulbOn.style.display = "none"
        bulbOff.style.display = "block"
    }
    else{
        bulbOn.style.display = "block"
        bulbOff.style.display = "none"
    }
}
