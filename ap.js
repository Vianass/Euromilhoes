
import { createResource, updateResource, deleteResource, fetchResources } from './api.js';


function renderData(data) {
  const container = document.getElementById('data-container');
  container.innerHTML = ''; 

  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = JSON.stringify(item);
    container.appendChild(div);
  });
}


async function loadData() {
  const data = await fetchResources();
  renderData(data);
}


async function addNewResource() {
  const newResource = { name: 'Exemplo', description: 'Descrição do Exemplo' };
  await createResource(newResource);
  await loadData(); 
}

async function modifyResource(id) {
  const updatedData = { name: 'Atualizado', description: 'Nova Descrição' };
  await updateResource(id, updatedData);
  await loadData(); 
}

async function removeResource(id) {
  await deleteResource(id);
  await loadData(); 
}

document.addEventListener('DOMContentLoaded', loadData);
