const PhoneBook = require("./models/phonbook");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World..............ahmed hassan");
});

app.listen(3000, () => {
  console.log("app running at post 3000");
});

app.post("/addPhone", async (req, res) => {
  console.log(req.body);
  const phoneNumber = new PhoneBook(req.body);
  try {
    await phoneNumber.save();
    res.status(201).json({
      status: "success",
      data: {
        phoneNumber,
      },
    });
  } catch (error) {
    console.log(res.body);
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
});

app.get("/addPhone/:id", async (req, res) => {
  const phoneBook = await PhoneBook.findById(req.params.id);
  try {
    res.status(200).json({
      status: "success",
      data: {
        phoneBook,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
});

app.get("/addPhone", async (req, res) => {
  const phoneBook = await PhoneBook.find({});
  try {
    res.status(200).json({
      status: "success",
      data: {
        phoneBook,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
});

app.patch("/addPhone/:id", async (req, res) => {
  const updatedPhone = await PhoneBook.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  try {
    res.status(200).json({
      status: "success",
      data: {
        updatedPhone,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error,
    });
  }
});

app.delete("/addPhone/:id", async (req, res) => {
  const deletedPhone = await PhoneBook.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json({
      status: "success",
      data: {
        deletedPhone,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error,
    });
  }
});
