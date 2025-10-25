const records = [];

function saveData() {
    const getName = document.getElementById('inputGroup1').value.trim();
    const getAddress = document.getElementById('inputGroup2').value.trim();
    const gettelno = document.getElementById('inputGroup3').value.trim();

    records.length = 0;
    for (let i = 1; i <= 100; i++) {
        const name = getName;
        const address = getAddress;
        const telNo = gettelno;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ name, address, telNo }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => {
                records.push(json);
                const record100 = records
                    .map(record => `
                        <div class="record">
                                <strong>Name:</strong> ${record.name}<br>
                                <strong>Address:</strong> ${record.address}<br>
                                <strong>Tel:</strong> ${record.telNo}<br>
                         </div>`)

                document.getElementById('output').innerHTML = record100;
    
            })
    }
}