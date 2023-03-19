import React from "react";

import "./input.scss";

const Input = ({ name, type, placeholder, onChange, value }) => {
    return <input name={name} className="input" type={type} placeholder={placeholder} onChange={onChange} value={value} />;
};

export default Input;
