const mongoose = require("mongoose");

const db =
  "mongodb+srv://lush:6969@cluster0.edu4x6q.mongodb.net/myTestDb?retryWrites=true&w=majority&appName=Cluster0";

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
