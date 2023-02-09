import React from "react";
import { PostsOverview, TopicOverview } from "../../components";

import "./overviewPage.scss";

const OverviewPage = () => {
    return (
        <section className="overview-page">
            <PostsOverview />
            <TopicOverview />
        </section>
    );
};

export default OverviewPage;
