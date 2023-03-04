import React, { useState } from "react";
import { PostsOverview, TopicOverview, Modal, AddTopicForm } from "../../components";
import axios from "axios";

import "./overviewPage.scss";

const OverviewPage = () => {
    const [addTopicModal, setAddTopicModal] = useState();
    const [topicData, setTopicData] = useState({ name: "" });

    const handleNewTopic = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/api/topics", topicData);
            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
        }

        return;
    };

    return (
        <section className="overview-page">
            <Modal title="Create a new topic" open={addTopicModal} setOpen={setAddTopicModal}>
                <AddTopicForm onSubmit={handleNewTopic} setTopicData={setTopicData} />
            </Modal>
            <PostsOverview />
            <TopicOverview setAddTopicModal={setAddTopicModal} />
        </section>
    );
};

export default OverviewPage;
