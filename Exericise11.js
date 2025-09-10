// Write a program to calculate factorial of a number using reduce and using for loops?

// let n =5;

// let mul = 0;

// for(i=1; i<=6;i++){

//    console.log(mul*i)
//     mul = 1*i
// }

// console.log(mul)


let a =6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,  b)=>{
        return a*b
    })
  console.log(c)
}
factorial(a)


function facFor(number){
  let fac =1;
  for(let index = 1; index <= number; index++){
    fac = fac*index
  }
  return fac
}

console.log(factorial(a))
console.log(factorial)