const mongoose = require("mongoose");
require('dotenv').config()
const db = process.env.MONGO_URL
 

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  });

const PhoneBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const PhoneBook = mongoose.model("PhoneBook", PhoneBookSchema);

module.exports = PhoneBook;
