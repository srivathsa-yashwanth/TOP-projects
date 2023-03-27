const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookinstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  dueBack: { type: Date, default: Date.now },
});

BookinstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

module.exports = mongoose.model("Bookinstance", BookinstanceSchema);
