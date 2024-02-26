import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function Popup({ show, close }) {
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="position-relative"
        // style={{ minHeight: "240px" }}
      >
        <ToastContainer
          className="p-3"
          position="top-end"
          style={{ zIndex: 1 }}
        >
          <Toast show={show} onClose={close} delay={2000} autohide bg="success">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Message</strong>
            </Toast.Header>
            <Toast.Body className="text-white">Date added</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}
