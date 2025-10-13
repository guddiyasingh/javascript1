function createCard(title, cName, views, monthsOld, duration, thumbnail){
    //Finish this function
     let viewStr 
     if(views<1000){
        viewStr = views;
     }
     else if(views>1000000){
        viewStr = views/1000000 + "M";
     }
     else{
        viewStr = views/1000 + "k";
     }
    let html =`<div class="card">
      <div class = "image">
      <img src = "${thumbnail}" alt = "">
       <div class = "capsule">${duration}</div>
       </div>
       <div class ="text">
      <h1>${title}</h1>
     <p>${cName} .${viewStr} views .${monthsOld} months ago</p>
     </div>
     </div>`
      

document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html

document.getElementById("addCardBtn").addEventListener("click", function(){
   createCard("Introduction to Express.js",
      "CodeWithHarry",
      56000,2,"31:22",
       "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs= AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A"

   )
})
}


createCard("Introduction to Backed | sigma Web Dev video #2 ", "CodeWithHarry",
   560000,7,"31:22",
"https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A")



