import React, { useState } from "react";
import { Checkbox, Input } from "../../../components";

import "./topicSelector.scss";

const TopicSelector = ({ postData, setPostData }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [topics, setTopics] = useState(["MERN", "Express", "Javascript", "PHP", "MongoDB", "NodeJS"]);

    const filteredTopics = topics.filter((topic) => {
        return topic.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleTopicChange = (e, currentTopic) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setPostData({
                ...postData,
                topics: [...postData.topics, currentTopic],
            });
        } else {
            setPostData({
                ...postData,
                topics: postData.topics.filter((topic) => topic !== currentTopic),
            });
        }
    };

    return (
        <div className="topic-selector">
            <h6 className="bold mb-sm">Select Topics</h6>
            <Input type="text" placeholder="Search topics..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {filteredTopics.length > 0 ? (
                <ul className="topic-selector__topic-list">
                    {filteredTopics.slice(0, 6).map((topic, index) => (
                        <li className="topic-selector__topic" key={index}>
                            <Checkbox checked={postData.topics.includes(topic)} onChange={(e) => handleTopicChange(e, topic)} />
                            <span>{topic}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <span>No matching topics</span>
            )}
        </div>
    );
};

export default TopicSelector;
