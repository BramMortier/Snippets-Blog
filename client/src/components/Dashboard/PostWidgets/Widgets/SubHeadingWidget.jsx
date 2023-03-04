import React from "react";
import { Input } from "../../../../components";

import "./subHeadingWidget.scss";

const SubHeadingWidget = ({ value, onChange, error }) => {
    return (
        <section className="subheading-widget">
            <div className="subheading-widget__top">
                <label className="black">Subheading</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="subheading-widget__body">
                <Input type="text" value={value} onChange={onChange} placeholder="Write your subheading..." />
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default SubHeadingWidget;
