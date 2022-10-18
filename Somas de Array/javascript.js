let text="";
let num=[40,15,23];
let total = 0;


function mostrar() {

    num.forEach(myfunction);
    document.getElementById("demo").innerHTML = text;
    
    }
    
function myfunction(item, index) {
        
    text += index + ":" + item + "<br>";
        
}

 function Soma(){

    num.forEach(myfunction2);
    document.getElementById("demo").innerHTML = total;

 } 
    
function myfunction2(item){

total+=item;


}