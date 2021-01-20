const router = require("express").Router();
const postController = require("../../controllers/postController");

// @route  GET api/posts
// @desc   Get all posts
// @access Private

router.get("/", postController.getPosts);

// @route  POST api/posts
// @desc   Create a post
// @access Private

router.post("/", postController.savePost);

module.exports = router;
