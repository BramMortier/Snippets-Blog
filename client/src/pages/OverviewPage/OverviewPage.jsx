import React from "react";
import { PostsOverview, TopicOverview } from "../../components";

import "./overviewPage.scss";

const OverviewPage = () => {
    return (
        <div>
            <PostsOverview />
            <TopicOverview />
        </div>
    );
};

export default OverviewPage;
