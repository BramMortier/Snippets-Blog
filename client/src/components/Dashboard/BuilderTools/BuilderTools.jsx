import React from "react";

import "./builderTools.scss";

const BuilderTools = ({ postBlocks, setPostBlocks }) => {
    const addBlock = (e) => {
        const target = e.target;

        const newBlock = {
            type: target.getAttribute("data-widgettype"),
            content: "",
        };

        setPostBlocks([...postBlocks, newBlock]);
    };

    return (
        <div className="builder-tools">
            <h6 className="bold">Widgets</h6>
            <ul className="builder-tools__widget-list">
                <li className="builder-tools__widget" onClick={addBlock} data-widgettype="Title">
                    <div className="builder-tools__widget-icon">
                        <img src="/images/heading-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Title</span>
                </li>
                <li className="builder-tools__widget" onClick={addBlock} data-widgettype="Heading">
                    <div className="builder-tools__widget-icon">
                        <img src="/images/heading-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Heading</span>
                </li>
                <li className="builder-tools__widget" onClick={addBlock} data-widgettype="Subheading">
                    <div className="builder-tools__widget-icon">
                        <img src="/images/heading-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Subheading</span>
                </li>
                <li className="builder-tools__widget" onClick={addBlock} data-widgettype="Paragraph">
                    <div className="builder-tools__widget-icon">
                        <img src="/images/paragraph-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Paragraph</span>
                </li>
                <li className="builder-tools__widget" onClick={addBlock} data-widgettype="Image">
                    <div className="builder-tools__widget-icon">
                        <img src="/images/image-icon.svg" alt="icon" />
                    </div>
                    <span className="bold text-sm">Image</span>
                </li>
            </ul>
        </div>
    );
};

export default BuilderTools;
