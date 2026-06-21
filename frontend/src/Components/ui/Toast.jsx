import { useEffect } from "react";

/**
 * Toast Component
 * Props:
 * message
 * show
 * onClose
 */

function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-700 text-white px-5 py-3 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
}

export default Toast;