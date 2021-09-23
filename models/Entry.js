const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    picture: { type: String },
    name: { type: String },
    dateSeen: { type: String },
    numberSeen: { type: Number },
    place: { type: String }
})

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;