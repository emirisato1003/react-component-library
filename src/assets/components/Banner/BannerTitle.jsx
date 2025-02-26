import { useContext } from "react";
import Button from "../Button/Button";
import { BannerContext } from "./Banner";

export default function BannerTitle({ children }) {
    const { toggleOpen } = useContext(BannerContext);
    return (
        <div onClick={toggleOpen} className="banner-line">
            {children}
        </div>
    );
}