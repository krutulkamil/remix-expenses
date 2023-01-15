import type { FunctionComponent, ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ children, onClose }): JSX.Element => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <dialog
                className="modal"
                open
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </dialog>
        </div>
    );
};

export default Modal;