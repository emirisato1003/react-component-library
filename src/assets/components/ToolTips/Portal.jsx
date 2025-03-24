import { createPortal } from 'react-dom';
import useToggle from '../../hooks/useToggle';

export default function Portal() {
    // const [on, setOn] = useToggle({
    //     onToggle: on
    // });
    return (
        <div style={{ border: '2px solid black' }}>
            <p onMouseEnter={() => !setOn}>children</p>
            {createPortal(
                <p>This child is placed in the document body.</p>,
                document.body
            )}
        </div>
    );
}
