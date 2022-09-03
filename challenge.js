//sqareroot of array elements
let arr=[25,36,49,64,81];
let newarr= arr.map((en,index,arr) =>{
    return Math.sqrt(en);
})
console.log(newarr);
//return elements greater than ten after multiplying by two
let arr1=[2,3,4,5,6,7,8];
let newarr1= arr1.filter((en,index,arr1)=>{
    if((en*2)>10)
    return (en);
})
console.log(newarr1);
let newarr2= newarr1.map((en,index,newarr1)=>{
    return (en*2);
})
console.log(newarr2);