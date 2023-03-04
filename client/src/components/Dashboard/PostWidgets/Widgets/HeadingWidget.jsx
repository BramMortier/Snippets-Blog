import React from "react";
import { Input } from "../../../../components";

import "./headingWidget.scss";

const HeadingWidget = ({ value, onChange, error }) => {
    return (
        <section className="heading-widget">
            <div className="heading-widget__top">
                <label className="black">Heading</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="heading-widget__body">
                <Input type="text" value={value} onChange={onChange} placeholder="Write your heading..." />
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default HeadingWidget;
