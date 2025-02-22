import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "./hooks/useToggle";


export default function Star({ onChange }) {
    const [on, toggle] = useToggle({
        onToggle: onChange
    });
    return (
        <div onClick={toggle}>
            {on ? <BsStarFill className="star" style={{ color: "orange" }} /> : <BsStar className="star" />}
        </div>
    );
}