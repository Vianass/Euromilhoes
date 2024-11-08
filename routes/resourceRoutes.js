// routes/resourceRoutes.js
import express from 'express';
const router = express.Router();

// Simulação de banco de dados (uma lista simples)
let resources = [
  { id: 1, name: 'Recurso 1', description: 'Descrição do Recurso 1' },
  { id: 2, name: 'Recurso 2', description: 'Descrição do Recurso 2' },
];

// Rota GET para obter todos os recursos
router.get('/', (req, res) => {
  res.json(resources);
});

// Rota POST para criar um novo recurso
router.post('/', (req, res) => {
  const { name, description } = req.body;
  const newResource = {
    id: resources.length + 1,  // Simples incremento de ID
    name,
    description,
  };
  resources.push(newResource);
  res.status(201).json(newResource);  // Retorna o recurso criado
});

// Rota PUT para atualizar um recurso pelo ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  
  const resourceIndex = resources.findIndex(r => r.id === parseInt(id));
  
  if (resourceIndex === -1) {
    return res.status(404).json({ error: 'Recurso não encontrado' });
  }
  
  resources[resourceIndex] = { id: parseInt(id), name, description };
  res.json(resources[resourceIndex]);
});

// Rota DELETE para excluir um recurso pelo ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  const resourceIndex = resources.findIndex(r => r.id === parseInt(id));
  
  if (resourceIndex === -1) {
    return res.status(404).json({ error: 'Recurso não encontrado' });
  }
  
  resources.splice(resourceIndex, 1);  // Remove o recurso da lista
  res.status(204).end();  // Retorna um status de sucesso sem conteúdo
});

export default router;
