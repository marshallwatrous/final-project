const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    picture: { type: String, required: false },
    name: { type: String, required: false },
    dateSeen: { type: String, required: false },
    numberSeen: { type: Number, required: false },
    place: { type: String, required: false }
})

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;