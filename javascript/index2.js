let num1=Number(document.getElementById("num1").value);
let num2=Number(document.getElementById("num2").value);

if(document.getElementById("num1").value == "") {
  alert("Le numero 1 n'est pas valide");
}else if(document.getElementById("num2").value == "") {
  alert("Le numero 2 n'est pas valide");
}else if(isNaN(num1)){
  alert("Le numero 1 n'est pas un nombre");
}else if(isNaN(num2)){
  alert("Le numero 2 n'est pas un nombre");
}else{
    let operation = document.getElementById("operation").value;
    var resultat = 0;
    switch(operation)
    {
      case "+":
      resultat=num1+num2;
      break;
      case "-":
      resultat=num1-num2;
      break;
      case "*":
      resultat=num1*num2;
      break;
      case "/":
      resultat=num1/num2;
      break;
      default:
            resultat = " vous devez choisir les operations suivantes : + - * /"
          break;
    }
    document.getElementById('resultat').innerHTML = resultat;
  
}
