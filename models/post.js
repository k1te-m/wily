const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  //   user: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "User",
  //     },
  //   ],
  //   title: {
  //     type: String,
  //     required: true,
  //     trim: true,
  //   },
  post: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("post", postSchema);
