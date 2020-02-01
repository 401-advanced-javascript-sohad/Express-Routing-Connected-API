'use strict';

const express = require('express');

const categories = require('../modules/categories.js');

const categoriesRouter = express.Router();

categoriesRouter.get('/categories', getCategorie);
categoriesRouter.post('/categories', postCategorie);
categoriesRouter.put('/categories/:id', updateCategorie);
categoriesRouter.delete('/categories/:id', deleteCategorie);

function getCategorie(req, res, next) {
    categories.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function updateCategorie(req,res,next){
    categories.update(req.params.id,req.body)
    .then(data=>{
        res.status(201).json(data)
    })
}
function postCategorie(req, res, next) {
    categories.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    })
}


function deleteCategorie(req,res,next){
<<<<<<< HEAD
    const message= 'Item is deleted';s
    categories.delete(req.params.id)
    .then(data=>{
        res.status(200).json({message})
    })
=======
    const message= 'deleted item';s
    categories.delete(req.params.id)
    .then(data=>{
        res.status(200).json({message})
    }).catch((err)=>console.error("error",err));
>>>>>>> 92c5a3bf8115d7096d15bf95a0277cb113208095
}

module.exports = categoriesRouter;