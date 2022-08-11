// console.log("hello")

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const Color = document.getElementById('Color');
// const Color1 = document.getElementById('Color1');



const colorConverter = ()=>{

    Color.innerHTML = `<h4 class="text-center text-light" style="margin-top: 120px">
    rgb(${red.value},${green.value},${blue.value})
  </h4>`
  Color.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})` 
}



