import React from "react";
import "./iconButton.scss";

const IconButton = ({ src, alt }) => {
    return (
        <button className="icon-btn">
            <img src={src} alt={alt} />
        </button>
    );
};

export default IconButton;
