let a =1;

for (let i=0; i< 100; i++) {

    console.log(a+i)
}


let obj = {

    name:"Guddiya",
    role: "programmer",
    company:"Google"
}

for (const key in obj){

    // const element = obj[key];
    const element =[key]

    console.log(element)
    console.log(obj)
}

for (const c of "Harry") {

    console.log(c)
}


let i = 0;

while(i<6) {

    console.log(i)
    i++;
}

let i1 =0;

do{
    console.log(i1)
    i1++;
}while(i1<6)