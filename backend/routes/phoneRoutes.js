const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phoneController');

router.get('/phones', phoneController.getAllPhones);
router.get('/phones/:id', phoneController.getPhoneById);


module.exports = router;