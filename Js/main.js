const colors = ["red", "green", "burlywood", "#f1f5f8", "gold", "grey", "purple", "pink", "orchid", "orange"]

const btn = document.querySelector('.main__btn')
const text = document.querySelector('.text')

btn.addEventListener('click', function(){
   let randomColor = Getrandom()

   btn.style.backgroundColor = colors[randomColor]
   document.body.style.backgroundColor = colors[randomColor]
   text.textContent = colors[randomColor]
   text.style.color = colors[randomColor]
})



function Getrandom(){
    return Math.floor(Math.random() * colors.length) 
}


