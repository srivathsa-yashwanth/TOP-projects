const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  title: { type: String, required: true, maxLength: 30 },
  text: { type: String, required: true, maxLength: 100 },
  author: { type: Schema.Types.ObjectId, ref: "user" },
  timeStamp: { type: Date },
});

module.exports = mongoose.model('message', messageSchema)