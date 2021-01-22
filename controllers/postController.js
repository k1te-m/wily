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
  getPostsByUsername: (req, res) => {
    const username = req.params.username;
    Post.find({ username: username })
      .then((posts) => {
        res.json(posts);
      })
      .catch((error) => res.status(422).json(error));
  },
  getPostsByIDandUpdate: (req, res) => {
    const id = req.params._id;
    Post.findOne({ _id: id })
      .then((post) => {
        console.log(post instanceof Post);
        console.log(post.likesCount);
        post.likesCount++;
        console.log(post.likesCount);
        post.save();
        res.json(post);
      })
      .catch((error) => res.status(422).json(error));
  },
};
