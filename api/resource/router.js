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

module.exports = router;