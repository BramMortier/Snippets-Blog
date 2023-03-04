import React from "react";
import { Tag, SectionDivider, Button } from "../../../components";
import { useTopicContext } from "../../../hooks/useTopicContext";

import "./topicsOverview.scss";

const TopicOverview = ({ setAddTopicModal }) => {
    const { topics } = useTopicContext();

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
