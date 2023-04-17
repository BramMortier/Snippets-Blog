const express = require("express");
const postFilesUpload = require("../middleware/fileUpload");
const uploadControllers = require("../controllers/uploadControllers");
const router = express.Router();

router.get("/postFiles", uploadControllers.getAllPostFiles);
router.get("/postFiles/:filename", uploadControllers.getOnePostFile);
router.post("/postFiles", postFilesUpload.array("files"), uploadControllers.uploadPostFiles);

module.exports = router;
