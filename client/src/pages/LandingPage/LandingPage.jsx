import React from "react";
import { Carousel, FeaturedPosts, TopicsList, TopicSuggestions } from "../../components";

import "./landingPage.scss";

const LandingPage = () => {
    return (
        <React.Fragment>
            <FeaturedPosts />
            <Carousel title={"Latest Snippets"} darkmode={false} />
            <TopicsList />
            <Carousel title={"React Snippets"} darkmode={true} />
            <TopicSuggestions />
        </React.Fragment>
    );
};

export default LandingPage;
