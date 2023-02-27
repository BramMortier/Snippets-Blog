import React from "react";

import "./widgetSelector.scss";

const WidgetSelector = ({ postData, setPostData }) => {
    const addBlock = (e) => {
        const target = e.target;

        const newBlock = {
            type: target.getAttribute("data-widgettype"),
            content: "",
        };

        setPostData({ ...postData, body: [...postData.body, newBlock] });
    };

    return (
        <section className="widget-selector">
            <h6 className="bold mb-sm">Widgets</h6>
            <ul className="widget-selector__widget-list">
                <li className="widget-selector__widget" onClick={addBlock} data-widgettype="Title">
                    <div className="widget-selector__widget-icon">
                        <img src="/images/heading-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Title</span>
                </li>
                <li className="widget-selector__widget" onClick={addBlock} data-widgettype="Heading">
                    <div className="widget-selector__widget-icon">
                        <img src="/images/heading-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Heading</span>
                </li>
                <li className="widget-selector__widget" onClick={addBlock} data-widgettype="Subheading">
                    <div className="widget-selector__widget-icon">
                        <img src="/images/heading-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Subheading</span>
                </li>
                <li className="widget-selector__widget" onClick={addBlock} data-widgettype="Paragraph">
                    <div className="widget-selector__widget-icon">
                        <img src="/images/paragraph-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Paragraph</span>
                </li>
                <li className="widget-selector__widget" onClick={addBlock} data-widgettype="Image">
                    <div className="widget-selector__widget-icon">
                        <img src="/images/image-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Image</span>
                </li>
            </ul>
        </section>
    );
};

export default WidgetSelector;
