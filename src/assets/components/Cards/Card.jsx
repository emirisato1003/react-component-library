import React from 'react';
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ children }) {
    return (
        <div className="card-container">
            <div className="icon-container">
                <HiOutlineCloudUpload className='icon' />
            </div>
            {children}
        </div>
    );
}