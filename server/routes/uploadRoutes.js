const express = require("express");
const postFilesUpload = require("../middleware/fileUpload");
const uploadControllers = require("../controllers/uploadControllers");
const router = express.Router();

router.get("/postFiles/:filename", uploadControllers.getPostFile);
router.post("/postFiles", postFilesUpload.array("files"), uploadControllers.uploadPostFiles);

module.exports = router;
