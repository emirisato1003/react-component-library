import { createPortal } from 'react-dom';
import useToggle from '../../hooks/useToggle';
import { CiCircleCheck } from "react-icons/ci";
import classNames from 'classnames';


export default function Toast() {
    // const [visible, setVisible] = useToggle({
    //     initialValue: false
    // });
    // const showToast = () => setVisible(true);
    // const closeToast = () => setVisible(false);
    // const popupClass = classNames('popup', theme);

    return (
        createPortal(
        <section className="toast">
            <div className="toast-container">
                <CiCircleCheck className='toast-icon' />
                <div className="toast-text">
                    <p>Success</p>
                    <p>Your work has been saved.</p>
                </div>
            </div>
        </section>,
        document.body
        )
    );
}