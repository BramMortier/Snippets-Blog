const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        body: {
            type: [
                {
                    element: String,
                    content: String,
                },
            ],
            required: true,
        },
        topics: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Topic",
                },
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
