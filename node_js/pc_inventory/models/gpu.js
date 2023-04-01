const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const gpuSchema = new Schema({
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
    memory: { type: String },
    clockSpeed: { type: String, maxLength: 10 },
    noOfTransistors: { type: String },
    tensorCores: { type: String },
    rayTracing: { type: Boolean },
  },
  features: [{ type: String }],
});

gpuSchema.virtual("url").get(function () {
  return `/gpu/${this._id}`;
});

gpuSchema.virtual("releaseDateFormatted").get(function () {
  const formatted = this.releaseDate
    ? DateTime.fromJSDate(this.releaseDate).toLocaleString(DateTime.DATE_MED)
    : "";
  return formatted;
});

module.exports = mongoose.model("Gpu", gpuSchema);
