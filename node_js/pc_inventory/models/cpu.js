const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const cpuSchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
  category: { type: Schema.Types.ObjectId, required: true, ref: "Category" },
  releaseDate: { type: Date },
  price: { type: Number, required: true },
  generation: { type: String },
  manufacturer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Manufacturer",
  },
  specs: {
    clockSpeed: { type: String, maxLength: 10 },
    cores: { type: Number },
    socketType: { type: String },
},
  features: [{ type: String }],
});

cpuSchema.virtual("url").get(function () {
  return `/cpu/${this._id}`;
});

cpuSchema.virtual("releaseDateFormatted").get(function () {
  const formatted = this.releaseDate
    ? DateTime.fromJsDate(this.releaseDate).toLocaleString(DateTime.DATE_MED)
    : "";
  return formatted;
});

module.exports = mongoose.model("Cpu", cpuSchema);
