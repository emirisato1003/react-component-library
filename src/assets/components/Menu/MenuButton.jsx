import React from "react"
import { MenuContext } from "./Menu";
import Button from "../../Button/Button"

export default function MenuButton({ children }) {
    const { toggleOpen } = React.useContext(MenuContext)
    return (
        <Button onClick={toggleOpen}>{children}</Button>
    )
}