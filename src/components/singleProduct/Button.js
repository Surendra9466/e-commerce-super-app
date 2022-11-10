import { useState } from "react";

const Button = ({color, index}) => {
    const [active, setActive] = useState(index === 0);
    const handleClick = ()=>{
        setActive(true);
    }
    return <button className={`color-btn active cursor-pointer mr-2 ${index === 0 || active ? 'active' : ''}`} style={{ backgroundColor: color }} onClick={handleClick}>
        {active && <svg className="text-sm" stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>}
    </button>
}

export default Button;