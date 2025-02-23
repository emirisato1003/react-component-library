import clsx from "clsx";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Banner({ children, status }) {
    const className = clsx(['banner', status]);
    console.log(className);
    return (
        <div className={className}>
            <div className="icon"><IoIosCheckmarkCircle /></div>
            <div>{children}</div>
        </div>
    );
}

