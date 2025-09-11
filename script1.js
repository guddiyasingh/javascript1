console.log(x=== undefined); // true
var x = 3;


(function () {
    console.log(x); // undefiend

    var x = "local value"
}) ();


let answer = 42;

answer  = "Thanks for all the fish";

console.log(answer);


x = "The answer is" +42
y = 42 + " is the answer";
z = "37" + 7 ;

console.log(x , y , z);



const sales = "Toyota";

function carTypes(name) {

    return name === "Honda" ? "name" : `Sorry, we don't sell ${name}.`; 
}

const car = {myCar: "Saturn", getCar: carTypes("Honda"), special: sales};

console.log(car.myCar); //Saturn
console.log(car.getCar);//Honda
console.log(car.special);//Toyota

var myName = "guddiya";

if(myName) {
    console.log("this is truthy value");
}
else {
    console.log("this is falsy value")
}