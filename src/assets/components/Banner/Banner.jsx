import clsx from "clsx";
import { createContext } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import useToggle from "../../hooks/useToggle";
const BannerContext = createContext();

export default function Banner({ children, status, onOpen }) {
    const [open, toggleOpen] = useToggle({
        onToggle: onOpen
    })
    const className = clsx(['banner', status]);
    return (
        // <div className={className}>
        //     <div className="banner-content">
        //         <IoIosCheckmarkCircle className="icon" />
        //         <div className="banner-text">{children}</div>
        //     </div>
        // </div>
        <BannerContext.Provider value={{open, toggleOpen}}>
            <div className="banner">
                {children}
            </div>
        </BannerContext.Provider>
    );
}

export { BannerContext }

