const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Get'
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
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Post',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if (id === '2') {
        res.status(200).json({
            message: 'sukses',
            id : id
        });
    }else {
        res.status(200).json({
            message: 'Passed Id'
        });
    }
});

router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'update product'
    });

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'delete'
    });
});

});

module.exports = router;