import classNames from 'classnames';
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ children, icon, iconBgColor }) {
    const styles = { backgroundColor: !iconBgColor ? '#3F75FE' : iconBgColor };
    return (
        <div className="card-container">
            <div className='icon-container' style={styles}>
                <span className='icon'>{icon ? icon : <HiOutlineCloudUpload />}</span>
            </div>
            {children}
        </div>
    );
}