const mongoose = require("mongoose");

const connectDB = () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;
