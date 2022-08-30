// https://icanhazdadjoke.com/api
const jks= document.getElementById('joke321');
const jkbut= document.getElementById('jkbtn001');
const generatejokes = async() =>{
    const setHeader={
        Accept: 'application/json' 
    }
    try{
    const awm= await fetch('https://api.chucknorris.io/jokes/random' , setHeader);
    const data= awm.json();
    jks.innerHTML= data.value;
    // .then((res)=>
    //     res.json()).then((data)=>{
    //         jks.innerHTML(data.joke);
    //     })
}catch(err){
    console.log(`The error is ${err}`);
}
}
jkbut.addEventListener('click',generatejokes);
generatejokes();