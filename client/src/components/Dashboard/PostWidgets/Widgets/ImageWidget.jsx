import React from "react";
import { Button } from "../../../../components";

import "./imageWidget.scss";

const ImageWidget = ({ error, onChange }) => {
    return (
        <section className="image-widget">
            <div className="image-widget__top">
                <label className="black">Image</label>
                {error && <span className="text-error">{error}</span>}
            </div>
            <div className="image-widget__body">
                <div className="image-widget__file-area">
                    <img src="/images/file-icon.svg" alt="image icon" />
                    <Button content="Choose file" />
                </div>
                <img src="/images/drag-icon.svg" alt="drag icon" />
            </div>
        </section>
    );
};

export default ImageWidget;
