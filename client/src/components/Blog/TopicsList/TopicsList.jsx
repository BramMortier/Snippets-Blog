import React from "react";
import { useTopicContext } from "../../../hooks/useTopicContext";

import "./topicsList.scss";

const TopicsList = () => {
    const { topics } = useTopicContext();

    return (
        <section className="topics-list">
            <ul className="topics-list__list">
                {topics &&
                    topics.slice(0, 8).map((topic) => (
                        <li key={topic._id} className="topics-list__list-item black">
                            {topic.name}
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default TopicsList;
