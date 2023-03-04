const topicServices = require("../services/topicServices");

const getAllTopics = async (req, res) => {
    const allTopics = await topicServices.getAllTopics();
    res.send({ status: "OK", data: allTopics });
};

const getOneTopic = async (req, res) => {
    res.send({ message: "GET one topic" });
};

const createNewTopic = async (req, res) => {
    const { body } = req;

    const newTopic = {
        name: body.name,
    };

    try {
        const createdTopic = await topicServices.createNewTopic(newTopic);
        res.status(201).send({ status: "OK", data: createdTopic });
    } catch (err) {
        res.status(500).send({ status: "FAILED", data: err.message });
    }
};

const deleteTopic = async (req, res) => {
    res.send({ message: "DELETE a topic" });
};

const updateTopic = async (req, res) => {
    res.send({ message: "UPDATE a topic" });
};

module.exports = {
    getAllTopics,
    getOneTopic,
    createNewTopic,
    deleteTopic,
    updateTopic,
};
