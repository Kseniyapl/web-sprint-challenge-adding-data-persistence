const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next);
})
router.post('/', (req, res, next) =>{
    Resource.create(req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;