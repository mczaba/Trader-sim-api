const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SaveSchema = new Schema(
    {
       user: Schema.Types.ObjectId,
       funds: {type: Number, required: true},
       favorites: [{type: String, required: true}],
       owned: [{
           symbol: {type: String, required: true},
           quantity: {type: Number, required: true}
       }]
    }
);

module.exports = mongoose.model('Save', SaveSchema);
