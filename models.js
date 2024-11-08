const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
