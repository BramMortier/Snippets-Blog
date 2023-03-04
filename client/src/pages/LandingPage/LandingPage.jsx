import React from "react";
import { FeaturedPosts, PostsList } from "../../components";

import "./landingPage.scss";

const LandingPage = () => {
    return (
        <React.Fragment>
            <FeaturedPosts />
            <PostsList />
        </React.Fragment>
    );
};

export default LandingPage;
