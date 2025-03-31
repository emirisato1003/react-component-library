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
        <section className="toast">
            <div className="pop-up">
                <CiCircleCheck className='popup-icon' />
                <div className="pop-up-text">
                    <p>Success</p>
                    <p>Your work has been saved.</p>
                </div>
            </div>
        </section>
    );
}