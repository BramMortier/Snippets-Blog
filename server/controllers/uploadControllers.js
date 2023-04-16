const path = require("path");
const fs = require("fs");

const uploadPostFiles = (req, res) => {
    res.status(200).json({ status: "OK", data: req.files });
};

const getPostFile = (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, "../public/postFiles/", filename);

    res.status(200).sendFile(filePath);
};

module.exports = { uploadPostFiles, getPostFile };
