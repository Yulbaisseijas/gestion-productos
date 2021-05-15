const { Router } = require('express');
const api_user = Router();
const userCtrl = require('../controllers/user');

api_user.get('/User', userCtrl.findAll);
api_user.get('/:id_0', userCtrl.findUserId);
api_user.post('/addNewUser', userCtrl.addNewUser);
api_user.put('/:id_0', userCtrl.updateUser);
api_user.delete('/User', userCtrl.deleteAll);
api_user.delete('/:id_0', userCtrl.deleteByID);

module.exports = api_user;