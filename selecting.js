console.log("Harry")

// let bhupenderaJogi = document.getElementsByClassName("box")
// console.log(bhupenderaJogi);

// bhupenderaJogi[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor="red"

// console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})