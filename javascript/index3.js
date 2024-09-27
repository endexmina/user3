//variable concatenation challenge
/*let one_tiltle="elzero", two_description="elzero web school", tree_date="25/10"
 document.write(`<div> <h3>${one_tiltle}</h3>
 <p>${two_description}</p>
 <span>${tree_date}</span></div>`.repeat(4))*/

//operation challenge
/*let d = "-100";
 let e = "20";
 let f = 30;
 let g = true;
 console.log(-d * +e);
 console.log(+ (-d))
 console.log(-(--d) + f + +(++e) * +(++g))  */

/* let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;

//1
console.log(Math.floor(Math.min(a, b, c, d)));
//2
console.log(a ** Number.parseInt(d));
//3
console.log(Number.parseInt(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
//4
console.log((Number.parseInt(b) / Math.ceil(d)).toFixed(2));
console.log(Math.round(Number.parseInt(b) / Math.ceil(d)).toFixed(2)); */

// string challenge
/*    let a = "Elzero web School";
  //1
 console.log(a.charAt(2).toUpperCase()+a.slice(3,6) )
 //2
 console.log(a.charAt(13).toUpperCase().repeat(8));
 //3
 console.log(a.split(" ",1));
 //4
 console.log(a.substring(0,10));
 //4
 console.log(a.charAt(0).toLowerCase()+a.slice(1,16).toUpperCase()+a.charAt(a.length-1).toLowerCase())  */
 

//chalenge if else
//ex1
/* 
 let a = 10;
a<10?
 console.log(10):
a>=10 && a<=40?
 console.log("10 to 40"):
 a>40?
  console.log(">40"):
  console.log("unknown");
  //ex2
let st = "Elzero Web School";
//1
if ((st.length*2).toString() === "34") {
  console.log("good");
}
//2
if (st.toLowerCase()||st.charAt(st. iOf("w"))==="w") {
  console.log("nice");
}
//3
if (st!=="sting") {
  console.log("nice");
}
//4
if (typeof st.length==="number") {
  console.log("good");
}
//5
if (st.slice(0,6).repeat(2)==="ElzeroElzero") {
  console.log("good");
} 
 */
//challenge switch
//ex1
/*let job = "";
let salary = 0;

switch(job){
  case'manager':
  salary = 8000;
  console.log(`The salary is ${salary}`);
  break;
  case'It' ||'support':
  salary = 6000;
  console.log(`The salary is ${salary}`);
  break;
  case'developer'||'designer':
  salary = 7000;
  console.log(`The salary is ${salary}`);
  break;
  default:
    salary=4000;
    console.log(`The salary is ${salary}`);
}
//ex2
let holidays = 4;
let money = 0;
if (holidays==0) {
  money=5000;
  console.log(`The salary is ${money}`);
} else if(holidays==1||holidays==2) {
  money=3000;
  console.log(`The salary is ${money}`);
}else if(holidays==3) {
  money=2000;
  console.log(`The salary is ${money}`);
}else if(holidays==4) {
  money=1000;
  console.log(`The salary is ${money}`);
}else if(holidays==5) {
  money=0;
  console.log(`The salary is ${money}`);
}else{
  money=0;
  console.log(`The salary is ${money}`);
}*/

//array challeng
/*  let zero= 0;
let counter =3;
let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

console.log(my.slice(zero,++counter).reverse());
console.log(my.slice(++zero,--counter).reverse());
 
console.log(my.reverse());
console.log(my.slice(--counter));
my.splice(zero,counter);
console.log(my.slice(counter));
console.log(my.concat("Elzero","rO"));  */

//loop challenge

/*let myadmis=["ahmed","ossama","sayed","stop","samera"]
let myemployees=["amgad","samah","ameer","omar","otman","amany","samia"]
 
document.write(`<div> We Have ${myadmis.length} admis </div>`)
document.write('<br>')
document.write("we have 3 admins")
document.write('<hr>')
let i=0
for (; i < myadmis.length; i++) {
    if (myadmis[i]=="stop") {break;}
document.write('<div>')
document.write(`The Admin for Team ${i+1} Is ${myadmis[i]}`)
document.write('<h3>team members:</h3>')
let k=0
for (let j=0; j< myemployees.length;j++) {
    if (myemployees[j][0]==myadmis[i][0]) {
        document.write(`<p>- ${k+1} ${myemployees[j]} </p>`)
        k++;
    }
}
document.write("</div>")
document.write("<hr>");
}*/

//function chalenge
/* function showDetails(a,b,c) {
let name, age ,statue
let result=[a,b,c]
for ( let i = 0; i < result.length; i++) {
 if (typeof result[i]==="string") {
  result[i]=name
 }  else if (typeof result[i]==="Number") {
  result[i]=age
 } else if (typeof result[i]==="boolean") {
  if (result[i]==="true") {
    statue="Available"
  }
 } else {
  statue=" not Available"
 }
 }
return document.write(`hello ${name} , your Age is ${age},you are ${statue} to hire`);
}
showDetails( "jjj", 3,true); 
 */

//diff entre map et filter
   /* let mapnames =["ahmed", "khalid", "amina", "islam", "khadija", "amira"];
let mnames = mapnames.map( function (ele) {
  return ele.startsWith("a")
})
console.log(mnames); // [true, false, true, false, false, true]

let filternames =["ahmed", "khalid", "amina", "islam", "khadija", "amira"];
let fnames = filternames.filter( function (ele) {
  return ele.startsWith("a")
})
console.log(fnames); //['ahmed', 'amina', 'amira']


let mix = "A12BS2ZX"
let amix = mix.split("").filter(function(ele) {
  return !isNaN(ele)
}).map(function(ele) {
  return ele * ele; 
}).join(" ");
console.log(amix);


let mystring ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = mystring.split("").map(function(ele) {
    return ele !== "," && ele !=="_" ? ele : "";
}).filter(function(ele) {
    return isNaN(parseInt(ele));
} ) .join("").slice(true,-true) 
console.log(solution);   */

//challenge DOM
/*let myElement = document.createElement("div");
myElement.className = "product";
let myElement1 = document.createElement("h2");
let myElement2 = document.createElement("p");
let myElement1text1 = document.createTextNode("mina kb");
let myElement2text2 = document.createTextNode("amina kanbi yuyu fatiha");
myElement1.appendChild(myElement1text1);
myElement2.appendChild(myElement2text2);
myElement.appendChild(myElement1);
myElement.appendChild(myElement2);
document.body.appendChild(myElement);
console.log(myElement);*/

//challenge2 DOM

//header
 /* 
let myheader = document.createElement("header");
myheader.className = "Website-header";
document.body.appendChild(myheader)
let mylogo = document.createElement("p");
mylogo.className = "logo";
let mylogotext = document.createTextNode("minakb")
myheader.appendChild(mylogo);
mylogo.appendChild(mylogotext);
let mymenu = document.createElement("ul");
mymenu.className = "menu";
let mymenu1 = document.createElement("li");
let mymenu2 = document.createElement("li");
let mymenu3 = document.createElement("li");
let mymenu4 = document.createElement("li");
let mymenu1text = document.createTextNode("home");
let mymenu2text = document.createTextNode("about");
let mymenu3text = document.createTextNode("service");
let mymenu4text = document.createTextNode("concat");
mymenu1.appendChild(mymenu1text);
mymenu2.appendChild(mymenu2text);
mymenu3.appendChild(mymenu3text);
mymenu4.appendChild(mymenu4text);

myheader.appendChild(mymenu);
mymenu.appendChild(mymenu1);
mymenu.appendChild(mymenu2);
mymenu.appendChild(mymenu3);
mymenu.appendChild(mymenu4);
console.log(myheader);
document.body.style.cssText = "box-sizing:border-box";
 myheader.style.cssText = "display:flex ; justify-content:space-between  ; align-items:center";
 mymenu.style.cssText = "list-style-type:none ; display:flex ;font-size:20px";
 mylogo.style.cssText = "font-size:30px ; color:red";
 mymenu1.style.cssText = "padding-right:20px";
 mymenu2.style.cssText = "padding-right:20px";
 mymenu3.style.cssText = "padding-right:20px";
 mymenu4.style.cssText = "padding-right:20px";
  
 //article
 let mycontent = document.createElement("div");
 mycontent.className = "content";
 document.body.appendChild(mycontent);
 for (let i=1; i < 16; i++) {
  let myproduct = document.createElement("div");
  myproduct.className = "product";
  myproduct.textContent = "product"
  let myproduct1 = document.createElement("span");
  myproduct1.textContent = `${i}`
  myproduct.appendChild(myproduct1);
  mycontent.appendChild(myproduct);
  myproduct.style.cssText = "width:200px ;  box-sizing:border-box ; text-align:center; height:60px ; background-color:green  ; margin:10px ; position:relative";
  myproduct1.style.cssText = " font-size:20px ; display:block";
 }
 console.log(mycontent);
 mycontent.style.cssText = "box-sizing:border-box ;display:flex ; flex-wrap:wrap ; background-color:red; justify-content:center "; 

function changer(){
  document.getElementById('inp1').value = 'javascript';
}

function calculer(){
  let str = document.getElementById('inp2').value;
  document.getElementById("inp3").value = str.trim().split(" ").length;
} 

function test(){
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;

  //document.getElementById("c").value = a.concat(' '+b);
  //document.getElementById("c").value = (a + ' ').concat(b);
  document.getElementById("c").value = a.concat(' ').concat(b);

}  */

//challenge BOM
/* let mybtn = document.getElementById("btn")
mybtn.onclick = function () {
 let myinput = document.getElementById("inp1").value;
 let mydiv = document.getElementById("para");
    if (myinput != "") {
    //create element
    let mydiv1 = document.createElement("div");
    mydiv1.style.cssText =  " background-color : white ; margin-top: 10px ; display: flex; justify-content: space-between;";                   
    let mypar = document.createElement("p")
    mypar.className="p1" 
    let mybtn1 = document.createElement("button") ;
    mybtn1.id="btn1"
    mybtn1.innerHTML= "delete"
    

    // appendchild
    mydiv1.appendChild(mypar)
    mydiv1.appendChild(mybtn1)
    mydiv.appendChild(mydiv1)
    mypar.innerHTML = myinput 
      //local storage
      let  mypara1 = document.querySelectorAll(".p1");
      for (let  i = 0;  i <  mypara1.length;  i++) {
        localStorage.setItem("pra" + i, innerHTML.mypara1[i] );
      } 
     //delete
     let t
     mybtn1.onclick = function() {
      t=mydiv1.remove(); 
     // localStorage.removeItem (key)  
      for (let j = 0; j < localStorage.length; j++) {
        let key = localStorage.key(j);
       localStorage.removeItem(key);} 
   }  
    }
  }   */


//Promise
   const myPromise = new Promise(( resolvefunction ,   rejectfunction) => {
      let connect = false;
      if (connect) {
        resolvefunction("Connection Established");
      } else {
         rejectfunction(Error("Failed Connection "));
      } 
    });
    myPromise.then(
      (resolveValue) => console.log(`Good ${resolveValue}`), //resolveValue:ful / resolveValue------resolvefunction("Connection Established");
      (rejectValue) => console.log(`Bad ${rejectValue}`)
    );
    console.log(myPromise); 

/*
  Promise And XHR
*/
 const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));  

/*
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next() );
console.log(iterator.next()); */

//ex2 nadir
/*let tab = ["jazz", "blues"];
console.log(tab)
tab.push("rock-n-roll")
console.log(tab);
tab.splice(1,1,"classics")
console.log(tab);
tab.splice(0,1,"rap","reggae")
console.log(tab);*/

//ex2 les function nadir
/*function inver() {
  let i1;
  i1 = document.getElementById("i1").value; 
  document.getElementById("i2").value =  i1.split('').reverse('').join('');
}*/
