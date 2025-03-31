import classNames from "classnames";
import { createContext } from "react";

const TestimonialContext = createContext()

export default function Testimonial({ children, imgUrl }) {
    const testimonialClassName = classNames(imgUrl ? 'testimonial-container' : 'testimonial-withNoImg-container');
    return (
        <TestimonialContext.Provider value={{imgUrl}}>
            <div className={testimonialClassName}>
                {imgUrl ? <img src={imgUrl} alt="testimonial person portrait" /> :
                    <>
                        <img src="src/assets/logo/Logo.png" />
                        <img className='dot_pattern' src="src/assets/logo/dot_pattern.png" alt="" />
                    </>
                }
                {children}
            </div>
        </TestimonialContext.Provider>
    );
}

export {TestimonialContext}