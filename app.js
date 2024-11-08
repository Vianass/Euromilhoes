
import express from 'express';
import resourceRoutes from './routes/resourceRoutes.js';

const app = express();
const PORT = 3000;

function gerador(n, min, max) {
    const aposta = new Set();
    while (aposta.size < n) {
        const numero = Math.floor(Math.random() * (max - min + 1) + min);
        aposta.add(numero);
    }
    return [...aposta].sort((a, b) => a - b);
}

function gerachave() {
    return {
        numeros: gerador(5, 1, 50),
        estrelas: gerador(2, 1, 12)
    };
}


app.use(express.json());
app.use(express.static('public')); 


app.get('/euro', (req, res) => {
    res.json(gerachave());
});


app.use('/api/resources', resourceRoutes);


app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});
