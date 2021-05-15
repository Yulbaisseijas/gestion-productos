const { Router } = require('express');
const api_prod = Router();
const prodCtrl = require('../controllers/product');

api_prod.get('/', prodCtrl.findAll);
api_prod.get('/:id_0', prodCtrl.findById);
api_prod.post('/addNewProd', prodCtrl.addNewProd);
api_prod.put('/:id_0', prodCtrl.updateProd);
api_prod.delete('/', prodCtrl.deleteAll);
api_prod.delete('/:id_0', prodCtrl.deleteByID);

module.exports = api_prod;