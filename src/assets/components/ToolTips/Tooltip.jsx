import { createPortal } from 'react-dom';
import useToggle from '../../hooks/useToggle';
import { BsArchive } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import classNames from 'classnames';


export default function Tooltip({ children, text, theme }) {
    const [visible, setVisible] = useToggle({
        initialValue: false
    });
    const showTooltip = () => setVisible(true);
    const closeTooltip = () => setVisible(false);
    const tooltipClassNames = classNames('tooltip-container', theme)

    return (
        <div onClick={showTooltip} className='tooltip'>
            <p>{text}</p>
            {visible && createPortal(
                <div onClick={showTooltip} className={tooltipClassNames}>
                    {children}
                    <button onClick={closeTooltip} className='close-btn icon'><IoMdClose/></button>
                </div>
                ,
                document.body
            )}
        </div>
    );
}