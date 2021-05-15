const mongoose = require('mongoose');
const model  = require('../models/user');

//Muestra todos los registros de la BD
exports.findAll = function(req, res) {
    model.find(function(err, data) {
        if(err) res.send(500, err.message);

        console.log('GET /user');
        res.status(200).jsonp(data);
    });
};

//Filtrado por Id de usuario
exports.findUserId = function(req, res) {
    model.find({_id : req.params.id_0}, function(err, data) {
        if(err) res.send(500, err.message);

        console.log('GET /user/ ' + req.params.id_0);
        res.status(200).jsonp(data);
    })
};

//Insertar nuevo registro
exports.addNewUser = function(req, res) {
    console.log('POST /addNewUser/');
    let add_user = new model({
        firstName  :  req.body.firstName,
        lastName   :  req.body.lastName,
        email      :  req.body.email,
        role	   :  req.body.role,
        password   :  req.body.password,
        loggedIn   :  false
    });

    add_user.save(function(err, status_res) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(status_res);
    });
};

//Actualizacion de datos de usuario
exports.updateUser = function(req, res) {
    console.log('PUT /updateUser/' + req.params.id_0);
    let filtro = { _id : req.params.id_0 };
    model.findOne(filtro, function(err, result) {
        result.firstName   =  req.body.firstName || result.firstName,
        result.lastName    =  req.body.lastName || result.lastName,
        result.email       =  req.body.email || result.email,
        result.role        =  req.body.role || result.role,
        result.password    =  req.body.password || result.password,
        result.loggedIn    =  req.body.loggedIn || result.loggedIn
        
        result.save(function(err) {
            if(err) return res.status(500).send(err.message);

            res.status(200).jsonp(result);
        });
    });
};

//Borra todos los registros de la tabla
exports.deleteAll = function(req, res) {
    model.remove({}, function(err, data) {
        if(err) res.send(500, err.message);

        console.log('DELETE /User/');
        res.json({ message: 'Users successfully deleted' });
    });
};

//Borra un registro de la tabla por ID
exports.deleteByID = function(req, res) {
    let filtro = { _id : req.params.id_0 };
    model.remove(filtro, function(err, data) {
        if(err) res.send(500, err.message);

        console.log('DELETE /User/ID: ' + req.params.id_0);
        res.json({ message: 'User successfully deleted' });
    });
};