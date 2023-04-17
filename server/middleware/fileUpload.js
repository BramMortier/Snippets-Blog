const multer = require("multer");

const postFilesStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/postFiles");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        const fileExtension = file.originalname.split(".").pop();
        const fileNameWithoutExtension = file.originalname.split(".").slice(0, -1).join(".");

        cb(null, fileNameWithoutExtension + "-" + uniqueSuffix + "." + fileExtension);
    },
});

const postFilesUpload = multer({ storage: postFilesStorage });

module.exports = postFilesUpload;
