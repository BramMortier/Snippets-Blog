import React from "react";
import { Tag, SectionDivider } from "../../../components";
import "./topicsOverview.scss";

const TopicOverview = () => {
    return (
        <section className="topics-overview">
            <SectionDivider sectionName="Topics Overview" />
            <ul className="topics-overview__list">
                <Tag content="Express" />
                <Tag content="MERN" />
                <Tag content="React" />
                <Tag content="CSS" />
                <Tag content="SASS" />
                <Tag content="HTML" />
                <Tag content="Javascript" />
                <Tag content="Typescript" />
            </ul>
        </section>
    );
};

export default TopicOverview;
