const Topic = require("../models/topicModel");

const getAllTopics = async () => {
    const allTopics = await Topic.find();
    return allTopics;
};

const getOneTopic = async () => {};

const createNewTopic = async (newTopic) => {
    const topic = await Topic.create(newTopic);
    return topic;
};

const updateTopic = async () => {};

const deleteTopic = async () => {};

module.exports = {
    getAllTopics,
    getOneTopic,
    createNewTopic,
    updateTopic,
    deleteTopic,
};
