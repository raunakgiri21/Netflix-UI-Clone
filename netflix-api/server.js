const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const dotenv = require("dotenv");
const path = require("path");

const __currDirname = path.resolve();

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__currDirname, "./netflix-ui/build")));
app.use("/api/user", userRoutes);

app.get("*", (_, res) => {
  res.sendFile(path.join(__currDirname, "./netflix-ui/build/index.html"), (err) => {
    res.status(500).send(err);
  });
});

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => {
      throw err;
    });
};

const port = process.env.PORT || 8000;

app.listen(port, () => {
  connect();
});
