import React from "react";

import "./formInput.scss";

const FormInput = ({ type, value, label, onChange, error, placeholder }) => {
    return (
        <div className="form-input">
            <div className="form-input__header">
                <label className="black">{label}</label>
                {error && <span className="text-error">{error}</span>}
            </div>

            <div className="form-input__body">
                <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </div>
    );
};

export default FormInput;
