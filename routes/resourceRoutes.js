
import express from 'express';
const router = express.Router();


let resources = [
  { id: 1, name: 'Recurso 1', description: 'Descrição do Recurso 1' },
  { id: 2, name: 'Recurso 2', description: 'Descrição do Recurso 2' },
];


router.get('/', (req, res) => {
  res.json(resources);
});


router.post('/', (req, res) => {
  const { name, description } = req.body;
  const newResource = {
    id: resources.length + 1,  
    name,
    description,
  };
  resources.push(newResource);
  res.status(201).json(newResource);  
});


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


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  const resourceIndex = resources.findIndex(r => r.id === parseInt(id));
  
  if (resourceIndex === -1) {
    return res.status(404).json({ error: 'Recurso não encontrado' });
  }
  
  resources.splice(resourceIndex, 1); 
  res.status(204).end();  
});

export default router;
