import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Text } from "@cruk/cruk-react-components";

export default function Popup({ show, close, message }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="position-relative"
      // style={{ minHeight: "240px" }}
    >
      <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
        <Toast show={show} onClose={close} delay={2500} autohide bg="success">
          <div className="d-flex align-items-end">
            <div className="toast-body text-white">{message}</div>
            <button
              onClick={close}
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </Toast>
      </ToastContainer>
    </div>
  );
}
