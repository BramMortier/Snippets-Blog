import React from "react";
import { PostsOverview, TopicOverview } from "../../components";

import "./overviewPage.scss";

const OverviewPage = () => {
    return (
        <div className="overview">
            <PostsOverview />
            <TopicOverview />
        </div>
    );
};

export default OverviewPage;
