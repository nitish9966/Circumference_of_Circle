const PI=3.14159;
let radius;
let result;
const circum = function (){
    radius=document.getElementById("mytext").value;
    radius=Number(radius);
    result=2*PI*radius;
    document.getElementById("myH3").textContent=result+`cm`;
}
