// button eka click karaddi
function clickblue() {
   document.getElementById('clicker').style.backgroundColor = 'blue';
   document.getElementById('clicker').style.borderRadius = '100px';
}

function clickred() {
   document.getElementById('clicker').style.backgroundColor = 'red';
   document.getElementById('clicker').style.borderRadius = '0px';
}


// mouse eka move karaddi
function mouseMove() {
   document.getElementById('mouseEvent').style.backgroundColor = 'blue';
   document.getElementById('mouseEvent').style.borderRadius = '100px';
}

function mouseOut() {
   document.getElementById('mouseEvent').style.backgroundColor = 'red';
   document.getElementById('mouseEvent').style.borderRadius = '0px';
}

// chat poto
function mouseOut1() {
   document.getElementById('chatpoto').style.backgroundImage = "url(../assets/chat-c-1.png)";
}
function mousein1() {
   document.getElementById('chatpoto').style.backgroundImage = "url(../assets/chat-c.png)";
}

// key event
function keyEvent1() {
   console.log('keydown')
}

function keyEvent2() {
   console.log('keyPress')
}

function keyEvent3() {
   console.log('keyup')
}


// key show event
function keyEvent4() {
   const key01 = document.getElementById('keyup1').value;
   document.getElementById('inertext').innerText = key01
   document.getElementById('divelop').innerHTML = `<h1></h1>`
}