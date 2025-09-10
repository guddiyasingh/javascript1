let arr = [1,2,3,4,5]

// Index 0,1,2,3,4

console.log(arr);
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

console.log(arr.toString())
console.log(arr.join("and"))
console.log(arr.pop())
console.log(arr.push("Harry"))
console.log(arr.shift())
console.log(arr.unshift("jack"))

console.log(arr);

console.log(arr.splice(1,2))
console.log(arr)
console.log(arr.splice(1, 3, 2222, 333))
console.log(arr)

//loop in array

let a = [1,2,3,4,5]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

a.forEach((value, index , arr) =>{
    console.log(value, index , arr)
})


let obj = {

    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(obj)
        
    }
}

for (const iterator of a) {
    
    console.log(iterator)
}

