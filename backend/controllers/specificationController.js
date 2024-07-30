const Specification = require('../models/Specification');

exports.getAllSpecifications = async (req, res) => {
  try {
    const specifications = await Specification.find();
    res.json(specifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
