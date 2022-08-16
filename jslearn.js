var myname='Pratyush Banerjee';
console.log(myname);
console.log(typeof(myname));
console.log(5 - "A");
console.log(3**5);
var a=Math.floor(16/10);
console.log(a);
console.log(Math.sqrt(16));
var arra1=["Prat", 33, "Me", "Pq"];
console.log(arra1.length);
console.log(arra1.indexOf("Me"));
arra1.splice(arra1.length-2,1,"Perry");
console.log(arra1);
console.log(arra1.length);
let newarr= arra1.filter((en, index, arr) => {
    if (en== "Perry")
    return `Index of= ${index} and the value is ${en== "Perry"} is ${en} belongs to ${arr}`;
    else
    return 0;
})
console.log(newarr);
let newarr1= arra1.map((en, index, arr) => {
    if (en== "Perry")
    return `Index of= ${index} and the value is ${en== "Perry"} is ${en} belongs to ${arr}`;
    else
    return 0;
})
console.log(newarr1);
console.log(`Sum= ${5+6 }`);
let total = ()=>{
    const a=6, b=96;
    let sum=a+b;
    return `Total result= ${sum}`;
}
console.log(total());