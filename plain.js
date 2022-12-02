let result =document.getElementById("result");
function numShow(num){
result.value += num; 
}

function clrAll(){
result.value ="";
}
function Del(){
result.value = result.value.slice(0, -1);
}
function calculate(){
let x = result.value;
let z = eval(x);
result.value = z ;
}
