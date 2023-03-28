const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 100 },
  lastName: { type: String, required: true, maxLength: 100 },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  let fullName = "";
  if (this.firstName && this.lastName) {
    fullName = `${this.firstName} ${this.lastName}`;
  } else {
    fullName = "";
  }
  return fullName;
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("datesFormatted").get(function () {
  return `(${this.dateOfBirth ? DateTime.fromJSDate(this.dateOfBirth).toLocaleString(
    DateTime.DATE_MED
  ): ''} - ${this.dateOfDeath ? DateTime.fromJSDate(this.dateOfDeath).toLocaleString(DateTime.DATE_MED) : ""})`;
});

module.exports = mongoose.model("Author", AuthorSchema);
