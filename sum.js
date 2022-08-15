document.getElementById("s44s").disabled= true;
var a= parseInt(document.getElementById("n1").value), b= parseInt(document.getElementById("n2").value);
        function total(){
            var a= parseInt(document.getElementById("n1").value), b= parseInt(document.getElementById("n2").value);
            // a=parseInt(a);
            // b=parseInt(b);
            var s= a+b;
            // var x= document.querySelector("#s0s");
            document.getElementById("s00s").disabled= true;
            // document.getElementById("s11s").disabled= false;
            // document.getElementById("s22s").disabled= false;
            // document.getElementById("s33s").disabled= false;
            document.getElementById("s44s").disabled= false;
            document.getElementById("s0s").innerHTML=`${s} is the sum`;
            // x.appendChild(document.createElement("p").appendChild(document.createTextNode(" Done")));
            // y.disabled= true;
            // document.getElementById("s0s").innerHTML=`${s} is the sum`;
        }
        function subtract(){
            var a= parseInt(document.getElementById("n1").value), b= parseInt(document.getElementById("n2").value);
            // a=parseInt(a);
            // b=parseInt(b);
            if(a>=b)
            var s= a-b;
            else
            var s=b-a;
            // document.getElementById("s00s").disabled= false;
            document.getElementById("s11s").disabled= true;
            // document.getElementById("s22s").disabled= false;
            // document.getElementById("s33s").disabled= false;
            document.getElementById("s44s").disabled= false;
            document.getElementById("s1s").innerHTML=`${s} is the difference`;
        }
        function multiply(){
            var a= parseInt(document.getElementById("n1").value), b= parseInt(document.getElementById("n2").value);
            // a=parseInt(a);
            // b=parseInt(b);
            var s= a*b;
            // document.getElementById("s00s").disabled= false;
            // document.getElementById("s11s").disabled= false;
            document.getElementById("s22s").disabled= true;
            // document.getElementById("s33s").disabled= false;
            document.getElementById("s44s").disabled= false;
            document.getElementById("s2s").innerHTML=`${s} is the product`;
        }
        function div(){
            var a= parseInt(document.getElementById("n1").value), b= parseInt(document.getElementById("n2").value);
            // a=parseInt(a);
            // b=parseInt(b);
            if(a>=b)
            var s= a/b;
            else
            var s=b/a;
            // document.getElementById("s00s").disabled= false;
            // document.getElementById("s11s").disabled= false;
            // document.getElementById("s22s").disabled= false;
            document.getElementById("s33s").disabled= true;
            document.getElementById("s44s").disabled= false;
            document.getElementById("s3s").innerHTML=`${s} is the quotient`;
        }
        function refresh(){
            alert("All Cleared");
            document.getElementById("n1").value=null;
            document.getElementById("n2").value=null;
            document.getElementById("s0s").innerHTML="Total:";
            document.getElementById("s1s").innerHTML="Subs:";
            document.getElementById("s2s").innerHTML="Product:";
            document.getElementById("s3s").innerHTML="Div:";
            document.getElementById("s00s").disabled= false;
            document.getElementById("s11s").disabled= false;
            document.getElementById("s22s").disabled= false;
            document.getElementById("s33s").disabled= false;
            document.getElementById("s44s").disabled= true;
        }