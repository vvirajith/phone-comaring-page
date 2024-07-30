const Phone = require('../models/phone');

exports.getAllPhones = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPhoneById = async (req, res) => {
      try {
        const phone = await Phone.findById(req.params.id);
        if (phone) {
          res.json(phone);
        } else {
          res.status(404).json({ message: 'Phone not found' });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
    