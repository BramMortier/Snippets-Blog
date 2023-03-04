import React from "react";

import "./button.scss";

const Button = ({ content, form, type, onClick }) => {
    return (
        <button form={form} className={`button black ${type ? `button--${type}` : ""}`} onClick={onClick}>
            {content}
        </button>
    );
};

export default Button;
