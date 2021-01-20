const Post = require("../models/post");

module.exports = {
  getPosts: (req, res) => {
    Post.find({})
      .sort({ date: -1 })
      .then((posts) => res.json(posts))
      .catch((error) => res.status(422).json(error));
  },
  savePost: async (req, res) => {
    await Post.create(req.body)
      .then((post) => {
        res.json(post);
        console.log("Post Saved.");
      })
      .catch((error) => res.status(422).json(error));
  },
};
