const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const manufacturerSchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
  leader: { type: String, maxLength: 50 },
  foundedIn: { type: Date },
  marketCap: { type: String },
  productCategories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

manufacturerSchema.virtual("url").get(function () {
  return `/manufacturer/${this._id}`;
});

manufacturerSchema.virtual("foundedInFormatted").get(function () {
  const formatted = this.foundedIn
    ? DateTime.fromJSDate(this.foundedIn).toLocaleString(DateTime.DATE_MED)
    : "";
  return formatted;
});

module.exports = mongoose.model("Manufacturer", manufacturerSchema);
