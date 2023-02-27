import React from "react";
import { Input } from "../../../../components";

import "./subHeadingWidget.scss";

const SubHeadingWidget = ({ type, value, label, onChange, error, placeholder }) => {
    return (
        <section className="subheading-widget">
            <div className="subheading-widget__top">
                <label className="black">{label}</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="subheading-widget__body">
                <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default SubHeadingWidget;
