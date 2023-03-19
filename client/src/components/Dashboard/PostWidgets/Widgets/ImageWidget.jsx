import React from "react";

import "./imageWidget.scss";

const ImageWidget = ({ error, onChange }) => {
    return (
        <section className="image-widget">
            <div className="image-widget__top">
                <label className="black">Heading</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="image-widget__body">
                <input type="file" accept="/image/*" />
            </div>
        </section>
    );
};

export default ImageWidget;
