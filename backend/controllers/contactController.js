const Contact = require("../models/contactModel");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    const form = await Contact.create(response);
    if (form) {
      res.status(200).json("COntact subbmitted succesfully");
    } else {
      res.status(402).json({ msg: "Failed to submit to the contact form" });
    }
  } catch (error) {
    res.status(402).json({ msg: "Failed to submit to the contact form" });
  }
};

module.exports = { contactForm };
