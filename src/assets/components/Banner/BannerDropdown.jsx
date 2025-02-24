import { useContext } from "react";
import { BannerContext } from "./Banner";

export default function BannerDropdown({ children }) {
    const { open } = useContext(BannerContext);
    console.log(open);
    return (
        <>
            {open && <p>{children}</p>}
        </>
    );
}