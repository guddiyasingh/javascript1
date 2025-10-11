function createCard(title, cName, views, monthsOld, duration,thumbnail) {
    // Finsh this function
    let viewStr
    if(views<1000000){
        viewStr = views/1000 + "k views"
    }

    else if(views>1000000){
        viewStr = views/1000000 + "M views";
    }

    else{
        viewStr = views/1000 + "k views"
    }

    let html =`<div class = "card>
    <div class = "image">
    <img src = "${thumbnail}" alt="">
    div class = "image"
    <div class = "capsule"></div>
    </div>
    <div class = "text">
    <h1>${title}</h1>
    <p>${cName}.${viewStr} views . 2 months ago </p>
     </div> 
     </div>     `
}