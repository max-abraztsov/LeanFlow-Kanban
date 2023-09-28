import React, {FC, ReactNode } from "react";
import "./Modal.scss";

interface ModalProps {
    active: boolean;
    setActive: (active: boolean) => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default Modal;