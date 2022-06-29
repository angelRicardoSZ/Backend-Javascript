const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "User",
    },
});

const model = mongoose.model("Message", mySchema);
module.exports = model;