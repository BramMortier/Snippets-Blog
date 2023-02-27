const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();
const { validate, postRules } = require("../middleware/validation");

router.get("/", postControllers.getAllPosts);
router.get("/:postId", postControllers.getOnePost);
router.post("/", validate(postRules), postControllers.createNewPost);
router.delete(":postId", postControllers.deletePost);
router.patch("/:postId", postControllers.updatePost);

module.exports = router;
