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

// @route  GET api/posts/:username
// @desc   Get specific posts by username
// @access Private

router.get("/:username", postController.getPostsByUsername);

// @route  GET api/posts/fav/:_id
// @desc   Get specific posts by username
// @access Private

router.get("/fav/:_id", postController.getPostsByIDandUpdate);

module.exports = router;
