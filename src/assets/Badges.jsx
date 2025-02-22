// import Button from "./components/Button/Button";

// import Button from "../Button/Button";


export default function Badges({ children, color }) {
    console.log(color);
    return (
        <>
            <button className={color}>{children}</button>
        </>
    );
}