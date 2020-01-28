const Save = require("../models/Save");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.post_save = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "11051990");
  if (!decodedToken) {
    const error = new Error("unauthorized");
    error.statusCode = 401;
    error.tosend = "unauthorized";
    throw error;
  } else {
    Save.findOne({ user: decodedToken.id })
      .then(foundSave => {
        if (!foundSave) {
          const newSave = new Save({
            user: decodedToken.id,
            funds: req.body.funds,
            favorites: req.body.favorites,
            owned: req.body.owned
          });
          return newSave.save();
        }
        foundSave.funds = req.body.funds;
        foundSave.favorites = req.body.favorites;
        foundSave.owned = req.body.owned;
        return foundSave.save();
      })
      .then(save => {
        res.status(200).json({ message: "successfully saved", status: 200 });
      })
      .catch(err => {
        const stat = err.statusCode || 500;
        res.status(stat).json({
          message: err.tosend || "Internal Server Error",
          status: stat
        });
      });
  }
};

exports.get_save = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "11051990");
  if (!decodedToken) {
    const error = new Error("unauthorized");
    error.statusCode = 401;
    error.tosend = "unauthorized";
    throw error;
  } else {
    Save.findOne({ user: decodedToken.id })
      .then(foundSave => {
        if (!foundSave) {
          const error = new Error("No save found");
          error.statusCode = 401;
          error.tosend = "No save found";
          throw error;
        }
        res.status(200).json({
          funds: foundSave.funds,
          favorites: foundSave.favorites,
          owned: foundSave.owned
        });
      })
      .catch(err => {
        const stat = err.statusCode || 500;
        res.status(stat).json({
          message: err.tosend || "Internal Server Error",
          status: stat
        });
      });
  }
};
