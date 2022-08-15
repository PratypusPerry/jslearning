// myname.getEverything();
let myname = {
    Name : 'Pratyush Banerjee',
    Age : '19+',
    Education : {
        School : 'The Aryans School',
        College : 'MSIT',
        CurrentS : 'SECOND YEAR BTECH',
        // getED (){
            // console.log(`My School is ${myname.Education.School}, College is ${myname.Education.College} and current qualification is ${myname.Education.CurrentS}`);
            // }, 
        },
        getEverything (){
            console.log(`My Name is ${myname.Name}, currently I am ${myname.Age} years old and my educational qualifications are My School is ${myname.Education.School}, College is ${myname.Education.College} and current qualification is ${myname.Education.CurrentS}`);
        }
}
myname.getEverything();