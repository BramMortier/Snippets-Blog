import React from "react";
import { Textarea } from "../../../../components";

import "./paragraphWidget.scss";

const ParagraphWidget = ({ value, label, onChange, error, placeholder }) => {
    return (
        <section className="paragraph-widget">
            <div className="paragraph-widget__top">
                <label className="black">{label}</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="paragraph-widget__body">
                <Textarea value={value} onChange={onChange} placeholder={placeholder}></Textarea>
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default ParagraphWidget;
