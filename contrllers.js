const Resource = require('../models/resourceModel');


exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter os recursos', error });
  }
};


exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Recurso não encontrado' });
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter o recurso', error });
  }
};


exports.createResource = async (req, res) => {
  try {
    const newResource = new Resource(req.body);
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o recurso', error });
  }
};


exports.updateResource = async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResource) return res.status(404).json({ message: 'Recurso não encontrado' });
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o recurso', error });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) return res.status(404).json({ message: 'Recurso não encontrado' });
    res.status(204).send(); // Sucesso sem conteúdo
  } catch (error) {
    res.status(500).json({ message: 'Erro ao apagar o recurso', error });
  }
};
