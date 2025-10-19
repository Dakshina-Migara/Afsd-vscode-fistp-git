
// calculator
function calculateSum() {
    const input1Element = document.getElementById('inputNumber1');
    const input2Element = document.getElementById('inputNumber2');
    const number1 = parseFloat(input1Element.value) || 0;
    const number2 = parseFloat(input2Element.value) || 0;
    const sum = number1 + number2;
    const sumDisplayElement = document.getElementById('subtotal1');

    if (sumDisplayElement) {
        sumDisplayElement.innerText = sum;
    } else {
        console.error("Error: Element with id 'sumDisplay' not found.");
    }
}


// equal not equal
function calculateequal() {
    const input1Element = document.getElementById('inputNumber3').value;
    const input2Element = document.getElementById('inputNumber4').value;

    if (input1Element.toLowerCase() == input2Element.toLowerCase()) {
        document.getElementById('subtotal2').innerText = "equal";
    } else {
        document.getElementById('subtotal2').innerText = " not equal";
    }
}


// first letter capital
function firstCapital() {
    const inputText = document.getElementById('inputNumber5').value;

    if (inputText.length > 0) {
        const words = inputText.split(' ');

        const capitalizedWords = words.map(word => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return '';
            }
        });


        const capitalizedText = capitalizedWords.join(' ');


        document.getElementById('subtotal3').innerText = capitalizedText;
    } else {
        document.getElementById('subtotal3').innerText = '';
    }
}

// enter all number sum
var sum = 0;
function enterSum() {
    const key01 = Number(document.getElementById('inputNumber6').value.slice(-1));
    sum = sum + key01;
    document.getElementById('subtotal4').innerHTML = sum
}

// marks grade
function markGrade() {
    const inputText = Number(document.getElementById('inputNumber7').value);


    if (inputText >= 75) {
        document.getElementById('subtotal5').innerText = "A";
    } else if (inputText >= 65) {
        document.getElementById('subtotal5').innerText = "B";
    } else if (inputText >= 55) {
        document.getElementById('subtotal5').innerText = "C";
    } else if (inputText >= 35) {
        document.getElementById('subtotal5').innerText = "S";
    } else {
        document.getElementById('subtotal5').innerText = "W";
    }
}

// find who
function findWho() {
    const inputText = document.getElementById('inputNumber8').value;

    switch (inputText) {
        case "intern":
            document.getElementById('subtotal6').innerText = "Intern Software Engineer";
            break;
        case "ase":
            document.getElementById('subtotal6').innerText = "Associate Software Engineer";
            break;
        case "se":
            document.getElementById('subtotal6').innerText = "Software Engineer";
            break;
        case "sse":
            document.getElementById('subtotal6').innerText = "Senior Software Engineer";
            break;
        case "tl":
            document.getElementById('subtotal6').innerText = "Tech Lead";
            break;
        default:
            document.getElementById('subtotal6').innerText = "error key word";
    }
}

//push button and store data after show 

let store = [];
function pushToArray() {
    const number = document.getElementById("inputNumber9").value;
    store.push(number);
    document.getElementById("inputNumber9").value = "";
}

function showArray() {
    document.getElementById("subtotal7").innerText = store;
}
