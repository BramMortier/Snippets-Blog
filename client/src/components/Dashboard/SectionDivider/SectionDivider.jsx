import React from "react";

import "./sectionDivider.scss";

const SectionDivider = ({ sectionName }) => {
    return (
        <React.Fragment>
            <div className="section-divider__name">
                <h4 className="bold mb-sm">{sectionName}</h4>
            </div>
            <div className="section-divider__divider mb-lg">
                <img src="/images/double-chevron-right-black.svg" alt="double chevron icon" />
                <span className="section-divider__line"></span>
            </div>
        </React.Fragment>
    );
};

export default SectionDivider;
