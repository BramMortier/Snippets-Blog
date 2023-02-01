import React from "react";
import { Tag } from "../../components";
import "./topicsOverview.scss";

const TopicOverview = () => {
    return (
        <section className="topics-overview">
            <h4 className="bold mb-sm">Topics Overview</h4>
            <div className="topics-overview__divider mb-lg">
                <img src="/images/double-chevron-right-black.svg" alt="double chevron icon" />
                <span className="topics-overview__divider-line"></span>
            </div>
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
