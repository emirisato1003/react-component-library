import { createPortal } from 'react-dom';

export default function Portal() {
    return (
        <div style={{ border: '2px solid black' }}>
            <p>children</p>
            {createPortal(
                <p>This child is placed in the document body.</p>,
                document.body
            )}
        </div>
    );
}
