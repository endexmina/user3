//loop challenge

let myadmis=["ahmed","ossama","sayed","stop","samera"]
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
}

    
     