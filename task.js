// var a=["image","video",'image','image'];
// var a=["image","image",'image','image'];
var a=["video","video",'video','video'];
// var a=["image"];
// var a=['video'];
// task.apply(this, a)
function task() {
    var i,img=0,vid=0;
    // for (i=0;i<a.length;i++)
    // {
    //     if (a[i]=='image')
    //     img++;
    //     else if(a[i]=='video')
    //     vid++;
    //     else
    //     break;
    // }
    a.forEach(item =>{
        if (item=='image')
        img++;
        else
        vid++;
    });
    if(img==1 && vid==0)
    return "Single Image";
    else if(img==0 && vid==1)
    return "single video";
    else if(img>1 && vid==0)
    return "Multi Image";
    else if(img==0 && vid>1)
    return "Multi Video";
    else
    return "Image-Video";

}
console.log(task.apply(this, a));