import { createPortal } from "react-dom";

function NotificationModal({ onClose }) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-300">
      {" "}
      <div className="w-full max-w-md animate-in fade-in zoom-in-95 rounded-2xl bg-white p-6 text-gray-900 shadow-2xl duration-300">
        {" "}
        <h2 className="text-2xl font-bold"> Notification</h2>
        <p className="mt-3 text-gray-600">You have a new notification!</p>
        <p className="mt-2 text-sm text-gray-400">
          This modal will automatically close after 5 seconds.
        </p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

export default NotificationModal;
