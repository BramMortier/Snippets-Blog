const getAllTopics = async (req, res) => {
    res.send({ message: "GET all topics" });
};

const getOneTopic = async (req, res) => {
    res.send({ message: "GET one topic" });
};

const createNewTopic = async (req, res) => {
    res.send({ message: "CREATE a new topic" });
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
