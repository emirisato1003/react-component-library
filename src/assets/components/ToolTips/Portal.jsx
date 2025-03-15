import { createPortal } from 'react-dom';

export default function Portal({title, text, icon}) {
    return (
        <div style={{ border: '2px solid black' }}>
            {createPortal(
                <p>This child is placed in the document body.</p>,
                document.body
            )}
        </div>
    );
}
