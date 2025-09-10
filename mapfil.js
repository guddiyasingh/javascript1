/* map() => Creates anew array by performing some operation an each array element.

const a =[1,2,3,4]

a.map ((value, index, array) =>{
    return value*value});

*/


 
    
    let arr = [1,13,24,3,6]
    // let newArr = []
    // for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     newArr.push(element**2)
    // }
    // console.log(newArr)

    let newArr = arr.map((e)=>{
        return e**2
    })

    console.log(newArr)

    let add =arr.map((m)=>{
        return m+6
    })
    console.log(add)


    const greaterThanSeven = (e)=>{
        if(e>7){

            return true
        }
        return false
        }

    const filter =a.filter(greaterThanSeven)
    console.log(filter)

     