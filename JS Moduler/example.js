function Amal() {
    console.log("Amal")
}
function Bimal(call) {
    call();
    console.log("Bimal")
}

//meka anonymous function ekak apita variable eka assign karala hari call kareki function eka
const Sunil = function(){
    console.log ("mama kiwwane")
}

const dasamal = function(val){
    console.log (val)
}


// call karanwaw
function Tharindu(call) {
    //call back karanawa
    call();
    console.log("Tharindu")
}

// function ekata values nethi welawedi call karaddi api values daganna ona
function Tharindu2(call) {
    //call back karanawa
    call(34);
    console.log("Tharindu")
}

// methana function eka pass karala thiyenne
Tharindu(Amal);

Bimal(Sunil);

//function ekata namak nethi welawata sampurna function ekama call karanwawa
Bimal(function(){
    console.log ("mama kiwwane")
});

//function ekata values nethi welawaka api function eka call karaddima values daganna ona
Tharindu2(function(val){
    console.log (val)
});