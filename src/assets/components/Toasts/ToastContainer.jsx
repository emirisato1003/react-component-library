import { createContext, useState } from "react";
import Toast from "./Toast";

import { IoMdClose } from "react-icons/io";
import useToggle from "../../hooks/useToggle";

const ToastContext = createContext();

export default function ToastContainer({ children }) {
    const [toasts, setToasts] = useState([]);
    const [visible, setVisible] = useToggle({
        initialValue: false
    });
    const addToast = (type, message, icon) => {
        const newToast = { id: Date.now(), type, message, icon };
        setToasts(prev => [...prev, newToast]);
    };

    // auto-remove toast after timeout
    // setTimeout(() => {
    //     const id = toasts.map(item => item.id);
    //     removeToast(id);
    // }, 3000);

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    // console.log(toasts.filter(toast => toast.id !== id));

    console.log(visible);
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
                            <button className={`toast-close-btn ${toast.type}`}>
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