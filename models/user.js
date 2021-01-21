const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: "Please enter a valid password.",
    trim: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  followedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  usersFollowing: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
