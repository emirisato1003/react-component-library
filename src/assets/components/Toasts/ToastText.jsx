import { useContext, useState } from "react";
import { ToastContext } from "./ToastContainer";

import { CiCircleCheck } from "react-icons/ci";
import { RiErrorWarningLine } from "react-icons/ri";
import { VscError } from "react-icons/vsc";
import { HiMiniInformationCircle } from "react-icons/hi2";

export default function ToastText() {
    const { addToast } = useContext(ToastContext);
    // const [isDisabled, setIsDisabled] = useState({
    //     addToast,
    //     'isDisabled' : false
    // });

    const handleSave = () => {
        addToast('success', 'Your work has been saved.', <CiCircleCheck className="toast-icon" />);
    };

    const handleWarning = () => {
        addToast('warning', 'A network error was detected.', <RiErrorWarningLine className="toast-icon" />);
    };

    const handleError = () => {
        addToast('error', 'Please re-save your work again', <VscError className="toast-icon" />);
    };

    const handleInfo = () => {
        addToast('information', 'Please read updated information', <HiMiniInformationCircle className="toast-icon" />);
    };
    return (
        <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleWarning}>Warning</button>
            <button onClick={handleError}>Error</button>
            <button onClick={handleInfo}>Info</button>
        </>
    );
}