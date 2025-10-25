function GetData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            let output = "";
            data.forEach(item => {
                output += `<div style="border:1px solid #f10000ff; margin:10px; padding:10px; width:250px;">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>`;
            });
            document.getElementById("cardsContainer").innerHTML = output;
        });
}