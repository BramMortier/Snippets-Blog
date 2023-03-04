import React, { useState } from "react";
import { Checkbox, Input } from "../../../components";
import { useTopicContext } from "../../../hooks/useTopicContext";

import "./topicSelector.scss";

const TopicSelector = ({ postData, setPostData }) => {
    const { topics } = useTopicContext();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTopics = topics.filter((topic) => {
        return topic.name.toLowerCase().includes(searchTerm.toLowerCase());
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
                            <Checkbox checked={postData.topics.includes(topic._id)} onChange={(e) => handleTopicChange(e, topic._id)} />
                            <span>{topic.name}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No matching topics</div>
            )}
        </div>
    );
};

export default TopicSelector;
