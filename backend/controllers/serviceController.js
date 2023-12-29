const Service = require("../models/serviceModel");

const getServices = async (req, res) => {
  try {
    const service = await Service.find();
    if (service) {
      return res.status(400).json(service);
    } else {
      return res.status(400).json({ msg: "Cannot fetch the services !!" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "internal server error !!" });
  }
};

const addServices = async (req, res) => {
  const { service, description, price, provider } = req.body;

  try {
    const newService = await Service.create({
      service,
      description,
      price,
      provider,
    });
    if (newService) {
      return res.status(200).json({ msg: "Service added successfully " });
    } else {
      return res.status(400).json({ msg: "Cannot add the services !!" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Error adding the services !!" });
  }
};

module.exports = { getServices , addServices };
