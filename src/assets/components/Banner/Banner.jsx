
export default function Banner({children, status}){
    return (
        <div className={status}>{children}</div>
    )
}