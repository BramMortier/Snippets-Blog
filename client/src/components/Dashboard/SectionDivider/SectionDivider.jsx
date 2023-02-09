import React from "react";

import "./sectionDivider.scss";

const SectionDivider = ({ sectionName, ctaButton }) => {
    return (
        <div className="section-divider">
            <div className="section-divider__name">
                <h4 className="bold">{sectionName}</h4>
                {ctaButton && ctaButton}
            </div>
            <div className="section-divider__divider mb-lg">
                <img src="/images/double-chevron-right-black.svg" alt="double chevron icon" />
                <span className="section-divider__line"></span>
            </div>
        </div>
    );
};

export default SectionDivider;
