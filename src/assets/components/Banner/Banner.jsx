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
        <BannerContext.Provider value={{open, toggleOpen, status}}>
            <div className={className}>
                {children}
            </div>
        </BannerContext.Provider>
    );
}

export { BannerContext }

