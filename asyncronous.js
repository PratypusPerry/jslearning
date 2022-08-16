const f2 = () => {
    setTimeout(() =>{ console.log("F@2 is called");},100);
}
const f1 = () => {
    console.log("F1 first Call");
    f2();
    console.log("F1 second call");
}
f1();