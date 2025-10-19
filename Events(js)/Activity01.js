
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
    const input1Element = document.getElementById('inputNumber5').value;

    if (input1Element.length > 0) {
        const capitalizedText = input1Element.charAt(0).toUpperCase() + input1Element.slice(1);
        document.getElementById('subtotal3').innerText = capitalizedText;
    } 
}
