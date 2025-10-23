function displayName() {
    let userName = document.getElementById("userName").value;
    sessionStorage.setItem('userName', userName);
    window.location.href = '../Events(js)/Assignment07-quiz.html';
}