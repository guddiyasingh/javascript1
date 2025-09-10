console.log("Script.js initializing");
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

let boxes = document.querySelector(".container").children


function getRandomColor(){

    let val1 = 233;
    let val2 = 124;
    let val3 = 111;

    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
})