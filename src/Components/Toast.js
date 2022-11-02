import React from "react";
import PropTypes from "prop-types";
import "./Toast.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Toast = ({ variant, children, Isopen, removeHandler }) => {
  return (
    <>
      {Isopen && (
        <div className={`toastwrapper top-to-bottom toast-${variant}`}>
          <div className="Icons">
            <BsCheckCircleFill />
          </div>
          <div className="content">{children}</div>

          <button className="close-btn" onClick={() => removeHandler()}>
            X
          </button>
        </div>
      )}
    </>
  );
};

Toast.defaultProps = {
  variant: "succsess",
  Isopen: true,
};

Toast.propTypes = {
  variant: PropTypes.oneOf(["danger", "succsess", "primary", "info"]),
  children: PropTypes.node,
  removeHandler: PropTypes.func,
  Isopen: PropTypes.bool,
};
export default Toast;
