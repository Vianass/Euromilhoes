
const express = require('express');
const app = express();
const resourceRoutes = require('./routes/resourceRoutes'); 


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

app.use(express.json()); 


app.get('/euro', function (req, res) {
    res.json(gerachave());
});


app.use('/api/resources', resourceRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});


import { fetchResources, createResource, updateResource, deleteResource } from './api.js';


function renderData(data) {
  const container = document.getElementById('data-container');
  container.innerHTML = ''; 

  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = JSON.stringify(item); 
    container.appendChild(div);
  });
}

async function updateData() {
  const data = await fetchResources(); 
  renderData(data); 
}


async function handleCreate() {
  await createResource({ name: 'Novo Recurso', description: 'Descrição' });
  updateData(); 
}

async function handleUpdate(id) {
  await updateResource(id, { name: 'Atualizado', description: 'Nova Descrição' });
  updateData(); 
}

async function handleDelete(id) {
  await deleteResource(id);
  updateData(); 
}

document.addEventListener('DOMContentLoaded', updateData);
