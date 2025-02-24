import { useContext } from "react";
import Button from "../Button/Button";
import { BannerContext } from "./Banner";

export default function BannerTitle({ children }) {
    const { toggleOpen, status } = useContext(BannerContext)
    return (
        <div onClick={toggleOpen}>{children}</div>
    );
}