import React from "react";
import { IconButton } from "../../../components";
import "./postCardMini.scss";

const PostCardMini = () => {
    return (
        <div className="postcard-mini">
            <div className="postcard-mini__image mb-sm">
                <IconButton src="/images/edit.svg" alt="edit icon" />
                <IconButton src="/images/delete.svg" alt="delete icon" />
            </div>
            <h6 className="bold">Portfolio website design</h6>
        </div>
    );
};

export default PostCardMini;
