const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Get'
    });
});

router.post('/',(req, res, next)=>{
    const product = {
        name: req.body.name,
        price: req.body.price
    };
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