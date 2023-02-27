import React from "react";
import { Input } from "../../../../components";

import "./headingWidget.scss";

const HeadingWidget = ({ type, value, label, onChange, error, placeholder }) => {
    return (
        <section className="heading-widget">
            <div className="heading-widget__top">
                <label className="black">{label}</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="heading-widget__body">
                <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default HeadingWidget;
