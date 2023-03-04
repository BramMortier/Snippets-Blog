import React from "react";
import { Input } from "../../../../components";

import "./titleWidget.scss";

const TitleWidget = ({ value, onChange, error }) => {
    return (
        <section className="title-widget">
            <div className="title-widget__top">
                <label className="black">Title</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="title-widget__body">
                <Input type="text" value={value} onChange={onChange} placeholder="Write your title..." />
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default TitleWidget;
