import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid absolute top-0 z-40 h-screen w-screen backdrop-blur">
          <div className="m-auto relative z-50 min-h-[200px] min-w-[80%] bg-white p-4 shadow-lg rounded-lg">
            <div className="flex justify-end">
              <button onClick={onClose} aria-label="Close" className="text-2xl">
                <AiOutlineClose />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
