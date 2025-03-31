import useToggle from '../../hooks/useToggle';
import { BsArchive } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import classNames from 'classnames';
import clsx from 'clsx';


export default function Tooltip({ children, title, theme }) {
    const [visible, setVisible] = useToggle({
        initialValue: true
    });

    // Extract color and style info from the theme
    const tooltipClass = clsx('tooltip', theme,);
    const tooltipTextClass = clsx('tooltip-text', theme);
    const closeButtonClass = clsx('close-btn', theme);
    return (
        visible && <div className={tooltipClass}>
            <BsArchive className='archive-icon icon' />
            <div className={tooltipTextClass}>
                <p className='tooltip-title'>{title}</p>
                <p>{children}</p>
            </div>
            <button onClick={() => setVisible(prev => !prev)} className={closeButtonClass}><IoMdClose className='icon' /></button>
        </div>
    );
}