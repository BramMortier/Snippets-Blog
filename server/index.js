const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const uploadRouter = require("./routes/uploadRoutes");
const postRouter = require("./routes/postRoutes");
const topicRouter = require("./routes/topicRoutes");
require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/api/uploads", uploadRouter);
app.use("/api/posts", postRouter);
app.use("/api/topics", topicRouter);

mongoose.connection.once("open", () => {
    console.log("DB connection established");
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
