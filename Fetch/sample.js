
// sample 
function Dataget() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));
    console.log('run');
}


// data sent 
function Savedata() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    console.log('hi');
}



// promise function
// function helloworld() {
//     return new Promise((resolve, reject) => {
//         resolve();
//     })
// }
// helloworld()
//     .then(() => { console.log('success..!') })
//     .catch(() => { console.log('error..!') })


// // add a timer
// function helloworld(val) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (val) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 5000)
//     })
// }
// helloworld(false)
//     .then(() => { console.log('success..!') })
//     .catch(() => { console.log('error..!') })



// values add karama
function helloworld(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val) {
                resolve('success..!');
            } else {
                reject('error..!');
            }
        }, 2000)
    })
}
// helloworld(false)
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) })


// Async await
async function getHallow() {
    try {
        const val1 = await helloworld(true);
        const val2 = await helloworld(false);
        const val3 = await helloworld(true);
        console.log(val1);
    } catch (err) {
        console.log(err)
    }
}
getHallow();