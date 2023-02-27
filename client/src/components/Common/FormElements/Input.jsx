import React from "react";

import "./input.scss";

const Input = ({ type, placeholder, onChange, value }) => {
    return <input className="input" type={type} placeholder={placeholder} onChange={onChange} value={value} />;
};

export default Input;
