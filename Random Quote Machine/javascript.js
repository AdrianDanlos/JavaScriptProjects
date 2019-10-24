var quoteEl = document.getElementById("new-quote");
quoteEl.onclick = function() {
    //set colors
    var rgb1 = getRandom(0, 255);
    var rgb2 = getRandom(0, 255);
    var rgb3 = getRandom(0, 255);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const uri = `${proxy}https://api.quotable.io/random`;
    fetch(uri).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('BAD HTTP stuff');
        }
    }).then((jsonData) => {
        console.log(jsonData);
        console.log(jsonData.content)
        console.log(jsonData.author)
        var newRGB = 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ')';
        document.documentElement.style.setProperty('--main-bg-color', newRGB); //Le asigno el color aleatorio a la variable que he creado en CSS
        document.getElementById("text").innerHTML = jsonData.content;
        document.getElementById("author").innerHTML = jsonData.author;
    }).catch((err) => {
        console.log('ERROR:', err.message);
    });
};

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}