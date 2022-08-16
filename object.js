// Nested object, objecct properties
let Name= "HEY WHAT'S YOUR NAME?"
let myname = {
    [Name] : 'Pratyush Banerjee',
    Age : '19+',
    Education : {
        School : 'The Aryans School',
        College : 'MSIT',
        CurrentS : 'SECOND YEAR BTECH',
        getED (){
            console.log(`My School is ${myname.Education.School}, College is ${myname.Education.College} and current qualification is ${myname.Education.CurrentS}`);
            }, 
        },
        getEverything (){
            console.log(`My Name is ${myname.Name}, currently I am ${myname.Age} years old. `);
            this.Education.getED();

        }
}
myname.getEverything();
console.log(myname);
console.log(Object.entries(myname));
console.log(Object.entries(myname.Education));
//object destructure
// let {j,k}= myname.Education;
// console.log(j);
//spread operators
var a=[2,3,4,5,6,7];
var b=[...a,8,9,10];
var c=[0,1,...b];
console.log(a);
console.log(b);
console.log(c);