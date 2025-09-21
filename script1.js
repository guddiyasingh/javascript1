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
 a.push("100")
 console.log(a)

//  console.log(a.push(100))

let a1 =[1,2,3,4,];
let a2=[5,6,7,8];
 let a3 =[9,8,7]

let a4= a3.concat(a1,a2);
console.log(a4);

let numbers = [1,2,3,4,5,6,7];

// numbers.splice(2);
// console.log(numbers);

// numbers.shift()
// console.log(numbers)

numbers.unshift(2)
console.log(numbers)

let a5 = [3,6,1,2,7,4];
a5.sort();
console.log(a5);

a5.reverse();
console.log(a5)
let a6 = [1, 2,3,4,5,6,7];

for (let i of a6) {
    const element =i*2
    console.log(element);
};

a6.forEach((value, index, arr)=>{
    console.log(value, index, arr)
});


// numbers.splice(1,2);
numbers.splice(1,3);
// numbers.splice(1,0);
console.log(numbers)


let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {

    if(Object.hasOwnProperty.call(obj,key)) {
        const element = obj[key];
        console.log(key,element);
    }

}

for(const value of a) {
    console.log(value)
}

let arr1 = [1,12,13,14,15,16];

// let newArr =[]

// for (let i=0; i<arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// }

 let newArr = arr.map((e,index,array)=>{
    return e**2
 })
console.log(newArr);


const greaterThanSeven = (e) =>{
    if(e>7) {
        return true
    }
    return false
}

console.log(arr1.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5]

const red = (a,b) => {
    // return a+b
    return a*b
}

console.log(arr2.reduce(red))

//   <!--create a business name generator by combining list of adjective  -->
//     <!-- Adjectives:
//     crazy
//     Amazing
//     fire

//     Shop Name:
//     Engine
//     Foods
//     Garments

//     Another Word:
//     Bros
//     Limited
//     Hub -->



 let rand = Math.random();
    let first, second, third;
    // 0 0.33 0.66 1
    if(rand<0.33){
        first = "Crazy";
    }
    else if(rand<0.66 && rand>=0.33){
     first = "Amazing";   
    }
    else{
        first ="Fire"
    }
    // Lets generate the second word

    if( rand>=0.33){
        second = "Crazy"
    }
    else if(rand<0.66 && rand>=0.33){
         second = "Foods"
    }
    else{
        second = "Fire"
    }
   
      // Lets generate the third word

    if( rand>=0.33){
        third= "Bros"
    }
    else if(rand<0.66 && rand>=0.33){
         third = "Limited"
    }
    else{
        third = "Hub"
    }

    console.log(`${first} ${second} ${third}`)

    // write a programe  to calculate the sum of first n natural number using reduce and using 
    // for loops 

    let arr3= [1,2,3,4,5,6];

    const red1 = (a,b) => {
       return a*b
    }

    console.log(arr3.reduce(red1));