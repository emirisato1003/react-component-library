// import Button from "./components/Button/Button";
import classNames from "classnames";
// import Button from "../Button/Button";


export default function Badges({ children, color, className }) {
    const allClasses = classNames(color, className)
    console.log(className);
    return (
        <>
            <button className={allClasses}>{children}</button>
        </>
    );
}