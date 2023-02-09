    fetch('./data.json')
    .then(response => response.json())
    .then(data=>getData(data))

function getData(data) {
    console.log(data)
}
