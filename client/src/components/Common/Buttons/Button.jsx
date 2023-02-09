import React from "react";

import "./button.scss";

const Button = ({ content, form }) => {
    return (
        <button form={form} className="button black">
            {content}
        </button>
    );
};

export default Button;
