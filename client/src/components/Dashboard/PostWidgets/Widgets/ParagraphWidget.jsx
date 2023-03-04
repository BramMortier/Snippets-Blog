import React from "react";
import { Textarea } from "../../../../components";

import "./paragraphWidget.scss";

const ParagraphWidget = ({ value, onChange, error }) => {
    return (
        <section className="paragraph-widget">
            <div className="paragraph-widget__top">
                <label className="black">Paragraph</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="paragraph-widget__body">
                <Textarea value={value} onChange={onChange} placeholder="Write your paragraph..."></Textarea>
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default ParagraphWidget;
