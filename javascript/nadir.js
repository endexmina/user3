//EX1
 function  permuter(){
   let  am = document.getElementById("a").value;
   let  bm = document.getElementById("b").value;
   let  cm = document.getElementById("c").value;
   let inp;
   inp=am;
   am=bm;
   bm=cm;
   cm=inp;
   document.getElementById('a').value = am;
   document.getElementById('b').value =  bm;
   document.getElementById('c').value =  cm; 
} 
 

  //ex2
  
/*  function distance() {
let x1 = document.getElementById("x1").value;
let x2 = document.getElementById("x2").value;
let y3 = document.getElementById("y1").value;
let y4 = document.getElementById("y2").value;
let operation = math.sqrt(math.pow(x1-x2,2)+math.pow(y3-y4,2));
document.getElementById("resultat").innerHTML=operation.toFixed(4)
} 

 function distance() {
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    let y1 = document.getElementById('y1').value;
    let y2 = document.getElementById('y2').value;

    let resultat = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

    document.getElementById('resultat').innerHTML = resultat.toFixed(4)
}  */
 

//ex3
/*  let nbsec = prompt('Entrez le nombre des secondes ?','25300')

let h = parseInt(nbsec / 3600);
console.log(h)

let reste = nbsec % 3600;
console.log(reste)
let min = parseInt(reste / 60);
console.log(min)
let sec = reste % 60;
console.log(sec)
document.getElementById('resultat').innerHTML = h + ": " + min + ": " + sec
console.log(h,min,sec); */
 


//ex4
/*
let inpu = document.getElementById("in1").value;
 function calcu1() {
    let inpu = document.getElementById("in1").value;
    let operation1 = Math.PI * inpu * 2;
    document.getElementById("resultat1").innerHTML= operation1;
 }
 function calcu2() {
    let inpu = document.getElementById("in1").value;
    let operation2 = Math.PI * Math.pow(inpu,2);
    document.getElementById("resultat2").innerHTML= operation2;
 }
 function calcu3() {
    let inpu = document.getElementById("in1").value;
    let operation3 = 4 * Math.PI * Math.pow(inpu,2)   ;
    document.getElementById("resultat3").innerHTML= operation3;
 }
 function calcu4() {
    let inpu = document.getElementById("in1").value;
    let operation4 =  (4/3) * Math.PI * Math.pow(inpu,3) ;
    document.getElementById("resultat4").innerHTML= operation4;
 }*/


 //objet string
 /*function mychange() {
    document.getElementById("in1").value="javascript";
 }
 function mycalculer(){
    let q1 = document.getElementById("in2").value;
    q1 = q1.split(" ")
    console.log(q1)
    document.getElementById("in3").value=q1.length;
 }
 function mytest() {
    let text1 = document.getElementById("in4").value;
    let text2 = document.getElementById("in5").value;
    let myconcat = text1.concat(" "+text2)
    document.getElementById("in6").value=myconcat.trim();
 }
 function mychanger() {
    let q2 = document.getElementById("in7").value ;
    q2=q2.split("") ;
    document.getElementById("in8").value = q2.join("-");
 }
 function mychange1() {
    let q2 = document.getElementById("in9").value ;
    document.getElementById("in10").value = q2.slice(0,4);
    document.getElementById("in11").value = q2.slice(4,10);
 }



 function mychanger1() {
    let q2 = document.getElementById("in12").value ;
    q2=q2.split("");
    let qf = q2.filter(function(ele) {
        return  !isNaN((ele));
    } ).join("");
    document.getElementById("in13").value=qf ;
 } */






 //serie3 les fonction
/*  let  mybtn= document.getElementById("btn");
mybtn.onclick = function myinverser () {
    let  inp = document.getElementById("a").value;
    document.getElementById("a1").value= inp.split("").reverse('').join("");
} 

function myfunction (){
    let inp = document.getElementById("b").value;
    console.log(inp.split("").sort().join(""))
    let p = inp.split("").sort('').join("");
    document.getElementById("b1").value =  p;
}
console.log(-10 - -20);
let mylist = ["mina", 1, true, "yahya"];
let mylist1 = ["aya", 6, false, "bb"];

console.log(mylist.concat(mylist1)); */