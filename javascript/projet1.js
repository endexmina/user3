//ex1
/* let myspan = document.getElementsByTagName("span");
ms = 0;
s = 0;
mn = 0;
h = 0;
function date() {
  ms += 1;
  if (ms == 60) {
    ms = 0;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }
  myspan[0].innerHTML = h;
  myspan[1].innerHTML = mn;
  myspan[2].innerHTML = s;
  myspan[3].innerHTML = ms;
}
var test;
function start() {
  test = setInterval(date, 1000);
}
function stop() { 
  clearInterval(test);
}
function reset() {
  clearInterval( test);
  ms = 0;
  s = 0;
  mn = 0;
  h = 0;
myspan[0].innerHTML = 0 + ":";
myspan[1].innerHTML =  0 + ":";
myspan[2].innerHTML = 0 + ":";
myspan[3].innerHTML = 0 
} */

//ex2
/*   function ajouter(){
     let myinput = document.getElementById("inp1").value;
     let myp;
      myp = document.getElementById("p1").innerHTML=myinput
    
 } 

   let mybtn = document.getElementById("btn")
mybtn.onclick = function(){
    let myinput = document.getElementById("inp1").value;
    if (myinput.value != "") {
    let mydiv = document.getElementById("para").innerHTML;  
    let mypar 
    mypar = document.createElement("p").innerHTML = myinput.value
    mydiv.append(mypar)
    }
}     */

//ex3
  let mydiv = document.getElementsByClassName("card");
let mybtn = document.getElementById("btn");
 mybtn.onclick = function (){
  let myarr = ["red" , "green", "black"]
     mydiv.style.backgroundColor = myarr[0];
     mydiv.style.backgroundColor = myarr[1];
     mydiv.style.backgroundColor = myarr[2];
 }  

//ex4
 let utilisateur = document.getElementById("utilisateur").value;
 let motdepasse = document.getElementById("mot de passe").value;
 let btnelement = document.getElementById("btn");
 btnelement.onclick = function() {
  if (motdepasse == "") {
     let  mymsg
    mymsg = document.getElementById("msg") ;
    mymsg.style.display ="block" 
  } 
 }  
