import { createPortal } from "react-dom";
import './Modal.css';

function Modal({ isOpen, children }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
