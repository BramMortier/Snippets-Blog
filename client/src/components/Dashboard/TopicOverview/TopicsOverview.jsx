import React, { useState, useEffect } from "react";
import { Tag, SectionDivider, Button } from "../../../components";
import axios from "axios";

import "./topicsOverview.scss";

const TopicOverview = ({ setAddTopicModal }) => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            const res = await axios.get("http://localhost:3000/api/topics");
            const { data } = res.data;
            setTopics(data);
        };
        fetchTopics();
    }, []);

    return (
        <section className="topics-overview">
            <SectionDivider sectionName="Topics Overview" />
            <ul className="topics-overview__list">
                {topics && topics.map((topic) => <Tag key={topic._id} content={topic.name} />)}
                <Button type="secondary" content="Add new" onClick={() => setAddTopicModal(true)} />
            </ul>
        </section>
    );
};

export default TopicOverview;
