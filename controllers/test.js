// let , const, var, hoisting, clouser
function hoisting(){
    console.log(studentName,"studentname");
    var studentName= "mayuri"
}
hoisting()

var sname;    //declaretion
var sname="Mayuri";
console.log(sname);
let lname="let"
let lname="let"
console.log(lname);
const awdizkey ="ggjh"
cname= "cneme"
console.log(cname);

// let  = reassign the value,    hoisting not applicable,     redeclarartion is not possible
// const =can not reassign the value ,    hoisting not applicable,   redeclarartion is not possible
// var = reassign the value,              hoisting            redeclaration is possible

// clouser = inner function can access outer function scope-
// lexical scoping  = 

function outerfunction(){
    var myName ="awdiz"
    // console.log(myName);
    function innerfunction(){
        // var subname="Institute"
        // console.log(subname);
    console.log(myName);

    }
    return innerfunction
}
var myfunction = outerfunction()    //[function : innerfunction]  var myname
console.log(myfunction());












