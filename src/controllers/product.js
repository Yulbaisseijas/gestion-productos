const mongoose = require('mongoose');
const model  = require('../models/product');

//Muestra todos los registros de la BD
exports.findAll = function(req, res) {
    model.find(function(err, data) {
        if(err) res.send(500, err.message);

        res.status(200).jsonp(data);
    });
};

//Filtrado por Id de producto
exports.findById = function(req, res) {
    model.find({_id : req.params.id_0}, function(err, data) {
        if(err) res.send(500, err.message);

        res.status(200).jsonp(data);
    })
};

//Insertar nuevo registro
exports.addNewProd = function(req, res) {
    let add_prod = new model({
        Name : req.body.Name,
        Code : req.body.Code,
        Description : req.body.Description
    });

    add_prod.save(function(err, status_res) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(status_res);
    });
};

//Actualizacion de datos de usuario
exports.updateProd = function(req, res) {
    let filtro = { _id : req.params.id_0 };
    model.findOne(filtro, function(err, result) {
        result.Name   =  req.body.Name || result.Name,
        result.Code   =  req.body.Code || result.Code,
        result.Description  =  req.body.Description || result.Description
        
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

        res.json({ message: 'Products successfully deleted' });
    });
};

//Borra un registro de la tabla por ID
exports.deleteByID = function(req, res) {
    let filtro = { _id : req.params.id_0 };
    model.remove(filtro, function(err, data) {
        if(err) res.send(500, err.message);

        res.json({ message: 'Product successfully deleted' });
    });
};