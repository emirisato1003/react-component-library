import classNames from 'classnames';
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ children, icon, iconColor }) {
    return (
        <div className="card-container">
            <div className='icon-container' style={{backgroundColor: 'green'}}>
                <span className='icon'>{icon ? icon : <HiOutlineCloudUpload />}</span>
            </div>
            {children}
        </div>
    );
}