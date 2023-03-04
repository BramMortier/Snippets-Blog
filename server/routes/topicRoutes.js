const express = require("express");
const topicControllers = require("../controllers/topicControllers");
const router = express.Router();
const { validate, topicRules } = require("../middleware/validation");

router.get("/", topicControllers.getAllTopics);
router.get("/:topicId", topicControllers.getOneTopic);
router.post("/", validate(topicRules), topicControllers.createNewTopic);
router.delete("/:topicId", topicControllers.deleteTopic);
router.patch("/:topicId", topicControllers.updateTopic);

module.exports = router;
