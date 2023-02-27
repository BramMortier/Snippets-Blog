import React from "react";

import "./textarea.scss";

const Textarea = ({ placeholder, onChange, value }) => {
    return <textarea className="textarea" placeholder={placeholder} onChange={onChange} value={value}></textarea>;
};

export default Textarea;
