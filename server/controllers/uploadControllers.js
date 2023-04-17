const path = require("path");
const fs = require("fs/promises");

const uploadPostFiles = (req, res) => {
    res.status(200).json({ status: "OK", data: req.files });
};

const getAllPostFiles = async (req, res) => {
    const files = await fs.readdir(path.join(__dirname, "../public/postFiles/"));
    const filePaths = files.map((file) => file);

    res.status(200).json({ status: "OK", data: filePaths });
};

const getOnePostFile = (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, "../public/postFiles/", filename);

    res.status(200).sendFile(filePath);
};

module.exports = { uploadPostFiles, getOnePostFile, getAllPostFiles };
