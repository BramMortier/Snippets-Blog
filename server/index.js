const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const postRouter = require("./routes/postRoutes");
const topicRouter = require("./routes/topicRoutes");
require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/posts", postRouter);
app.use("/api/topics", topicRouter);

mongoose.connection.once("open", () => {
    console.log("DB connection established");
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
