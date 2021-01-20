const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  post: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("post", postSchema);
