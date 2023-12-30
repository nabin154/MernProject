const Contact = require("../models/contactModel");
const mongoose = require("mongoose")

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

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (contacts) {
      return res.status(200).json(contacts);
    } else {
      return res.status(400).json("failed to fetch the coontacts");
    }
  } catch (error) {
    res.status(402).json({ msg: "Error in fetching the contacts" });
  }
};


const deleteContact = async (req, res) => {
  const id = req.params.id;

  // Check if id is a valid ObjectId
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: "Invalid contact ID" });
  }

  try {
    const user = await Contact.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    else{
const contacts = await Contact.find();
    return res.status(200).json(contacts);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error in deleting the contact" });
  }
};

module.exports = { contactForm, getContacts, deleteContact };
