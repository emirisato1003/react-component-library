import { createContext, useState } from "react";
import Toast from "./Toast";

import { IoMdClose } from "react-icons/io";
import useToggle from "../../hooks/useToggle";

const ToastContext = createContext();

export default function ToastContainer({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = (type, message, icon) => {
        const newToast = { id: Date.now(), type, message, icon };
        setToasts(prev => [...prev, newToast]);
        setTimeout(() => removeToast(newToast.id), 3000);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <Toast>
                <div className="toast">
                    {toasts.map(toast => (
                        <div key={toast.id} className={`toast-container ${toast.type}`}>
                            {toast.icon}
                            <div className="toast-text">
                                <p>{toast.type}</p>
                                <p>{toast.message}</p>
                            </div>
                            <button className={`toast-close-btn ${toast.type}`} onClick={() => removeToast(toast.id)}>
                                <IoMdClose />
                            </button>
                        </div>
                    ))}
                </div>
            </Toast>
        </ToastContext.Provider>
    );
}

export { ToastContext };