import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom'
import useToggle from '../../hooks/useToggle';
import classNames from 'classnames';
import ToastContainer from './ToastContainer';


export default function Toast({children}) {
    // const [visible, setVisible] = useToggle({
    //     initialValue: false
    // });
    // const showToast = () => setVisible(true);
    // const closeToast = () => setVisible(false);
    // const popupClass = classNames('popup', theme);
    const toastRoot = document.getElementById('toast-root')
    return ReactDOM.createPortal(children, toastRoot)
    // return (
    //     createPortal(
    //     <section className="toast">
    //         {children}
    //     </section>,
    //     document.body
    //     )
    // );
}