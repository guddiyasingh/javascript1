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


if (Math.random() > 0.5) {
    const y =5;
}
console.log(y)


// Let check the temperature


var temperature = 25;
 if (temperature > 30) {

    console.log("Lets go to beach");
 }
 else {
    console.log("tv dekhte ha");
 }

 // EXTERA COMMAS IN ARRAY LITERALS

 const fish = ["Lion", , "Angle"];

 console.log(fish.length); //3
 console.log(fish[1]); //undefined
 console.log(fish)



 let arr = [1, 2,3,4,5,6];

 arr[0] =56666;
 console.log(arr, typeof arr);
 console.log(arr.length);

//  console.log(arr[0]);
//  console.log(arr[2]);
//  console.log(arr[5]);

 console.log(arr.toString())
 console.log(arr.join(" and "));

 const a = [1,2,3,4,5];
 a.pop()
 console.log(a)

 console.log(a.push(100))