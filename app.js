const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

const userRouter = require("./routes/user");
const saveRouter = require("./routes/save");

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

app.use("/users", userRouter);
app.use("/save", saveRouter);
app.listen(PORT);
