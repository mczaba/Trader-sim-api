const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SaveSchema = new Schema({
  user: Schema.Types.ObjectId,
  funds: { type: Number, required: true },
  favorites: [
    {
      symbol: { type: String, required: true },
      customName: { type: String, required: false }
    }
  ],
  owned: [
    {
      symbol: { type: String, required: true },
      quantity: { type: Number, required: true },
      customName: { type: String, required: false }
    }
  ]
});

module.exports = mongoose.model("Save", SaveSchema);
