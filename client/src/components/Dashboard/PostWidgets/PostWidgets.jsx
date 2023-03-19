import React from "react";
import { HeadingWidget, SubHeadingWidget, ParagraphWidget, ImageWidget, TitleWidget } from "../../../components";

import "./postWidgets.scss";

const PostWidgets = ({ postData, setPostData }) => {
    const handleContentUpdate = (index, e) => {
        const updatedPostWidgets = [...postData.body];
        updatedPostWidgets[index].content = e.target.value;
        const titleBlock = updatedPostWidgets.find((widget) => widget.type === "Title");

        setPostData({
            ...postData,
            body: updatedPostWidgets,
            title: titleBlock.content,
        });
    };

    const renderPostWidget = (postWidget, index) => {
        switch (postWidget.type) {
            case "Title":
                return <TitleWidget key={index} onChange={(e) => handleContentUpdate(index, e)} />;
            case "Heading":
                return <HeadingWidget key={index} onChange={(e) => handleContentUpdate(index, e)} />;
            case "Subheading":
                return <SubHeadingWidget key={index} onChange={(e) => handleContentUpdate(index, e)} />;
            case "Image":
                return <ImageWidget key={index} />;
            default:
                return <ParagraphWidget key={index} onChange={(e) => handleContentUpdate(index, e)} />;
        }
    };

    if (postData.body.length === 0) {
        return (
            <div className="post-widgets__empty-placeholder">
                <span className="black text-lg">Post content empty</span>
                <p className="text-sm">To start writing a post you must add one or more widgets from the toolbar.</p>
            </div>
        );
    }

    return <div className="post-widgets">{postData.body && postData.body.map((postWidget, index) => renderPostWidget(postWidget, index))}</div>;
};

export default PostWidgets;
