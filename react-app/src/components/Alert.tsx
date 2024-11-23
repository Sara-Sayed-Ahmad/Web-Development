import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
      <div className="alert alert-primary alert-dismissible fade show">
        {children}
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
