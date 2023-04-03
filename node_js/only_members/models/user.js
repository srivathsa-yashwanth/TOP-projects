const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  isMember: { type: Boolean },
  password: { type: String, required: true },
});

UserSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

UserSchema.virtual("url").get(function () {
  return `/user/${this._id}`;
});

module.exports = mongoose.model("user", UserSchema);
