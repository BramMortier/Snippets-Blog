const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const topicModel = mongoose.model("Topic", topicSchema);

module.exports = topicModel;
