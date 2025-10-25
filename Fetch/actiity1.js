function saveData() {
    const getName = document.getElementById('inputGroup1').value;
    const getAddress = document.getElementById('inputGroup2').value;
    const gettelno = document.getElementById('inputGroup3').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: getName,
            Adreess: getAddress,
            telNo: gettelno,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
        .catch((err) => console.log());
        .finally(() => {});
}
