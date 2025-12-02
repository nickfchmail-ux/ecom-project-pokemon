import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, open: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: function () {
      console.log("trigger Click");
      open(openWindowName);
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  return createPortal(
    <div>
      <button onClick={close}>Close</button>
      <div>
        <h1>from modal</h1>
        {children}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
