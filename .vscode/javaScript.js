// Inserting and Removing Elements

document.querySelector(".container").innerText
document.querySelector(".container").outerHTML
document.querySelector(".container").tagName

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by harry </b>"
div.setAttribute("class","created");
document.querySelector(".container").before(div);

document.querySelector(".box").remove()
// undefiend
document.querySelector(".container").classList
document.querySelector(".container").className
document.querySelector(".container").classList.add("harry")
// document.querySelector(".container").classList.remove("harry")
// document.querySelector(".container").classList.toggle("red")