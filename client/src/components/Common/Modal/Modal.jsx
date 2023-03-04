import React from "react";
import ReactDOM from "react-dom";

import "./modal.scss";

const Modal = ({ title, children, open, setOpen }) => {
    if (!open) {
        return null;
    }

    return ReactDOM.createPortal(
        open ? (
            <div className="modal" onClick={() => setOpen(false)}>
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal__header">
                        <span className="black">{title}</span>
                        <div className="modal__header-icon" onClick={() => setOpen(false)}>
                            <img src="/images/close.svg" alt="close icon" />
                        </div>
                    </div>
                    <div className="modal__body">{children}</div>
                </div>
            </div>
        ) : null,
        document.getElementById("modals")
    );
};

export default Modal;
