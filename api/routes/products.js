const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/',(req, res, next)=>{
  Product.find().exec().then(docs => {
    console.log(docs);
    res.status(200).json(docs);
  }).catch(err => {
      res.status(500).json({
          error: err
      });
  });
});

router.post('/',(req, res, next)=>{
 /*    const product = {
        name: req.body.name,
        price: req.body.price
    }; */
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Post',
            createdProduct: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
   
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    Product.findById(id).exec().then(doc => {
        console.log("From Database", doc);
        if (doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({
                message:"ID not found"
            });
        }
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error: err});
    });

  /*   if (id === '2') {
        res.status(200).json({
            message: 'sukses',
            id : id
        });
    }else {
        res.status(200).json({
            message: 'Passed Id'
        });
    } */
});

router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'update product'
    });
});

router.delete('/:productId', (req, res, next)=>{
   let id = req.params.productId;
    Product.remove({ _id: id }).exec().then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

});



module.exports = router;