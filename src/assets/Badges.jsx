// import Button from "./components/Button/Button";
import classNames from "classnames";
import clsx from "clsx";
// import Button from "../Button/Button";


export default function Badges({ children, color }) {
    const allClasses = classNames('badge', color);
    // console.log(className);
    return (
        <>
            <span className={allClasses}>{children}</span>
        </>
    );
}