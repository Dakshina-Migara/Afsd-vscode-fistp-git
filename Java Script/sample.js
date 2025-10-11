console.log("hi");

document.writeln('<h1>acpttttttttttt</h1>');
document.writeln('<h2>hchriiiiiiiii</h2>');
document.writeln('<h3>haloooooooo</h3>');
document.writeln('<h4>byeeeeeeeeeeeeee</h4>');
document.writeln('<img src="../assets/google.png" alt="Google Logo">');

//data types
//.....1.number
const num = 30;

//.....2.String
const String = 'name'

//......3.boolean
const boolean = true;

//.....4.object
const object = {}

//......5.array
const arrays = []


//Variable types

//....1.Var
var v = 10;
console.log(v); //rediclare karanna puluwan
var v = 20;
console.log(v); //reddiclare 2
v = 30;
console.log(v); //reasign karanna puluwan
{ var vv = 40; }
console.log(vv); // block scope ekak ethule heduwath variable eka eliye pawichchi karanna puluawan


//....2.let
let l = 10;
console.log(l); // redeclare karanna be
i = 30;
console.log(i);
l = 20;
console.log(l); // reasign karanna puluwan
{ let ll = 30; }
//console.log(ll); // block scope ekak ethule liyana variable ekak eliye pawichchi karanna be


//....3.const
const c = 90;
console.log(c);//redeclare karanna be
//c = 40;
//console.log(c); // reasign karnna be
//{const cc = 60;}
//console.log(cc); //block scope ekak ethule liyapu variable ekak aye eliyata aragena liyanna be



//..............Arithmetic operators...........
// + - * % ++ --
var a = 10;
var b = 20;
//Addition
console.log(a + b);

//Subtraction
console.log(b - a);

//Multiplication
console.log(a * b);

//Modulus
console.log(b % a);

//division
console.log(b / a);

//Increment
console.log(++a);
console.log(a++);

//Decrement
console.log(--b);
console.log(b--);


//..............Comparison operators...........
//== != > < >= <=
var x = 10;
var y = 10;

//Equal to
console.log(x == y);
console.log(x == 10);
console.log(x == '10'); // meya data type eka methanadi check karanne ne eka hinda true wenawa
console.log(x === '10'); //strict equal to //methanadi eya data type ekath check karala balanwa

//Not equal to
console.log(x != y);
console.log(x != 20);
console.log(x != '10'); // meya data type eka methanadi check karanne ne eka hinda false wenawa

//Greater than
console.log(x > 5);
console.log(x > 10);

//Less than
console.log(x < 15);
console.log(x < 10);

//Greater than or equal to
console.log(x >= 10);
console.log(x >= 15);

//Less than or equal to
console.log(x <= 10);
console.log(x <= 5);

//..............Logical operators...........
// && || !

var p = 10;
var q = 20;

//AND operator
console.log(p < 15 && q > 15); //true + true = true
console.log(p < 5 && q > 15); //false + true= false

//OR operator
console.log(p < 5 || q > 15); //false + true = true
console.log(p < 5 || q < 15); // false + false = false

//NOT operator
console.log(!(p < 15));//true -->false 
console.log(!(p > 15)); //false --> true



//..............functions...........

function Additionnumbers() {
    const num1 = 10;
    const num2 = 20;
    const sum = num1 + num2;
    console.log('sum is: ' + sum);
}
Additionnumbers();



//..............functions with parameters...........

function parametersnumbers(n1, n2) {  //parameters
    console.log(n1 + n2);
}
parametersnumbers(173457164, 2072376127); //arguments
parametersnumbers(10, 20)


//..............functions with return...........

function returnnumbers(ns1, ns2) {
    var total = ns1 + ns2;
    return total;
}
const total = returnnumbers(10, 30);
console.log(total);




function parametersaverage(sub1, sub2, sub3) {
    const total = sub1 + sub2 + sub3;
    const average = total / 3;
    console.log(average);
}
parametersaverage(70, 80, 50);


//.........functions..........

// Name function
function nameFunction() {

}

// Anonymous function
const anonymousFunction = function () { //function ekata name ekak nehe eka hinda api wenawa function ekak create karagannawa

}

// Arrow function
const arrowFunction = () => { //mekedith wenama function ekak create karagannawa () => scope ekai thama use karanne

}



function marksfunction(mark1) {
    if (mark1 >= 75) {
        console.log("A");
    }
    else if (mark1 >= 65) {
        console.log("B");
    }
    else if (mark1 >= 55) {
        console.log("C");
    }
    else if (mark1 >= 35) {
        console.log("S");
    }
    else {
        console.log("F");
    }
}
marksfunction(75);
marksfunction(65);
marksfunction(55);
marksfunction(45);
marksfunction(16);


function nameFunction(name) {
    switch (name) {
        case 'A':
            console.log("Amal");
            break;
        case 'B':
            console.log("Bhanuka");
            break;
        case 'C':
            console.log("Chathura");
            break;
        case 'D':
            console.log("Dawika");
            break;
        case 'E':
            console.log("Eshan")
            break;
        default:
            console.log("invalid please try again");
    }
}

nameFunction('A');
nameFunction('B');
nameFunction('C');
nameFunction('D');
nameFunction('E');
nameFunction('K');



// array sample
const sample = [10,20,30];
function baltotarray(arrr) {
    var total = 0;
    for (let i = 0; i < arrr.length; i++) {
        total += arrr[i];
    }
    return total;
}
console.log(baltotarray(sample));