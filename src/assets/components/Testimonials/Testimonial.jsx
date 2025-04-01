import classNames from "classnames";
import { createContext } from "react";
import logo from '/public/logo.png'
import dotPattern from '/public/dotPattern.png'

const TestimonialContext = createContext()

export default function Testimonial({ children, imgUrl }) {
    const testimonialClassName = classNames(imgUrl ? 'testimonial-container' : 'testimonial-withNoImg-container');
    return (
        <TestimonialContext.Provider value={{imgUrl}}>
            <div className={testimonialClassName}>
                {imgUrl ? <img src={imgUrl} alt="testimonial person portrait" /> :
                    <>
                        <img src={logo} />
                        <img className='dot_pattern' src={dotPattern} alt="dot pattern" />
                    </>
                }
                {children}
            </div>
        </TestimonialContext.Provider>
    );
}

export {TestimonialContext}