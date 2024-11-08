
const express = require('express');
const app = express();
const resourceRoutes = require('./routes/resourceRoutes'); // Importa o ficheiro de rotas

// Função para gerar números aleatórios para a chave do EuroMillions
function gerador(n, min, max) {
    const aposta = new Set();
    while (aposta.size < n) {
        const numero = Math.floor(Math.random() * (max - min + 1) + min);
        aposta.add(numero);
    }
    return [...aposta].sort((a, b) => a - b);
}

function gerachave() {
    const chave = {
        numeros: gerador(5, 1, 50),
        estrelas: gerador(2, 1, 12)
    };
    return chave;
}

// Middleware para analisar JSON no corpo das requisições
app.use(express.json()); 

// Define rota para o recurso EuroMillions
app.get('/euro', function (req, res) {
    res.json(gerachave());
});

// Usa as rotas para outros recursos
app.use('/api/resources', resourceRoutes);

// Porta de escuta
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});

