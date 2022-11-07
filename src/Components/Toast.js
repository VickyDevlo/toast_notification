import PropTypes from "prop-types";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineWarning } from "react-icons/ai";
import "./Toast.css";

const Toast = ({ variant, children, Isopen, removeHandler }) => {
  return (
    <>
      {Isopen && (
        <div className={`toastwrapper toast-${variant}`}>
          {(() => {
            switch (variant) {
              case "success":
                return (
                  <>
                    <BsCheckCircleFill />
                    this is a successful toast.
                  </>
                );
              case "primary":
                return (
                  <>
                    <AiOutlineInfoCircle />
                    this is a information toast.
                  </>
                );
              case "warning":
                return (
                  <>
                    <AiOutlineWarning />
                    this is a warning toast.
                  </>
                );

              case "danger":
                return (
                  <>
                    <ImCancelCircle />
                    this is a error toast.
                  </>
                );
              default:
                return;
            }
          })()}

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
  variant: "primary",
  Isopen: true,
};

Toast.propTypes = {
  variant: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  children: PropTypes.node,
  removeHandler: PropTypes.func,
  Isopen: PropTypes.bool,
};
export default Toast;
