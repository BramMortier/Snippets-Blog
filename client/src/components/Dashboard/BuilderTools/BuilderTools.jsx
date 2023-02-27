import React from "react";
import { WidgetSelector, TopicSelector } from "../../../components";

import "./builderTools.scss";

const BuilderTools = ({ postData, setPostData }) => {
    return (
        <div className="builder-tools">
            <WidgetSelector postData={postData} setPostData={setPostData} />
            <TopicSelector postData={postData} setPostData={setPostData} />
        </div>
    );
};

export default BuilderTools;
