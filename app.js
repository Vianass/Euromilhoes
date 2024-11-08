

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


app.get('/euro', function (req, res) {
    res.json(gerachave());
});

app.listen(3000, function () {
    console.log("app express listening port 3000");
})

const express = require('express');
const app = express();
const resourceRoutes = require('./routes/resourceRoutes'); 

app.use(express.json()); 


app.use('/api/resources', resourceRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});

