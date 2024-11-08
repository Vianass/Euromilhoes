// client.js
import { fetchResources, createResource, updateResource, deleteResource } from './api.js';

function renderData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Limpa o contêiner

    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = JSON.stringify(item); // Exibe o item (podes personalizar a exibição)
        container.appendChild(div);
    });
}

async function updateData() {
    const data = await fetchResources(); // Obtém os dados mais recentes
    renderData(data); // Atualiza a interface com os dados novos
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

// Carregar os dados na inicialização da aplicação
document.addEventListener('DOMContentLoaded', updateData);

