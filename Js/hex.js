const hex = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",]

const btn = document.querySelector(".main__btn")
const text = document.querySelector(".text")

btn.addEventListener("click", () =>{
    let hexColor = "#"
    for(let i = 0; i<=5; i++){
        hexColor += hex[rando()]
    }
    document.body.style.backgroundColor = hexColor
    btn.style.backgroundColor = hexColor
    text.style.color = hexColor
    text.textContent = hexColor
})

function rando(){

    return Math.floor(Math.random() * hex.length)
}