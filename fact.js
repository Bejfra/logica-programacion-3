
let fact=1;
let numFact;

function factorial(numFact){
    let num=prompt("Digite el número que desea calcular el factorial: ");
    num=Number(num);
if(Number.isNaN(num)===false){
    while(num>0){
        fact*=num;
        num--;
    }
    
}else{
    alert ("Error, el dato deben ser de tipo número");
    factorial(num);
}

alert("El factorial del número es: " + fact);
}
factorial(numFact);