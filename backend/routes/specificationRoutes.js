const express = require('express');
const router = express.Router();
const specificationController = require('../controllers/specificationController');

router.get('/', specificationController.getAllSpecifications);

module.exports = router;
