import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useContext, useState } from "react";
import AppContext from "./context/AppContext";

export default function Toasts({ message }) {
  const { toasts, addToast, removeToast } = useContext(AppContext);
  const [show, setShow] = useState(true);
  return (
    <ToastContainer
      className="p-3 position-fixed top-0 end-0"
      style={{ zIndex: 1 }}
    >
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          show={toasts.includes(toast)}
          onClose={() => {
            setShow(false);
            removeToast(toast.id);
          }}
          bg="success"
        >
          <div className="d-flex align-items-end">
            <div className="toast-body text-white">{toast.message}</div>
            <button
              onClick={() => removeToast(toast.id)}
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </Toast>
      ))}
    </ToastContainer>
  );
}
