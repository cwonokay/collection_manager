const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/hairDir");

const hairSchema = new Schema({
    name: { type: String, required: true, unique: true },
    installTime: Number,
    cost: Number,
    styles: [{
        color: { type: String, lowercase: true, trim: true },
        length: { type: Number,  required: true, default: 1 }


    }],
    source: {type: String}
})

const Hair = mongoose.model('Hair', hairSchema);

module.exports = Hair;
