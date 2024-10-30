express = require('express');

app = new express();

app.use(express.static('./public'));

function gerador(n, min, max) {
    aposta = new Set();

    while (aposta.size < n) {
        numero = Math.floor(Math.random() * (max - min + 1) + min);
        aposta.add(numero);
    }
    return [...aposta].sort((a, b) => a - b);
}
    
function gerachave() {
    chave = {
        numeros: [],
        estrelas : []
    };

    chave.numeros = gerador(5, 1, 50);
    chave.estrelas = gerador(2, 1, 12);

    return chave;
}

//app.get('/', function (req, res) {
//    res.send('Gerador de chaves em /euro!');
//});

app.get('/euro', function (req, res) {
    //res.setHeader('Content-Type', 'application/json');
    res.json(gerachave());
});

app.listen(3000, function () {
    console.log("app express listening port 3000");
})

