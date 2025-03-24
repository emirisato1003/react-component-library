import { createPortal } from 'react-dom';
import useToggle from '../../hooks/useToggle';
import { BsArchive } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";


export default function Portal({ onOpen }) {
    const [on, setOn] = useToggle({
        onToggle: onOpen
    });
    return (
        <div>
            <p onClick={setOn}>Click me</p>
            {on && createPortal(
                <div className="tooltip-container">
                    <BsArchive className='archive-icon icon' />
                    <div className="tooltip-text">
                        <p className='tooltip-title'>Archive notes</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
                    </div>
                    <button className='close-btn'>
                        <IoMdClose className='icon' />
                    </button>
                </div>
                ,
                document.body
            )}
        </div>
    );
}
