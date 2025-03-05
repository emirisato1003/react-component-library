import { FaQuoteLeft } from "react-icons/fa"
import { TestimonialContext } from "./Testimonial";
import { useContext } from "react";

export default function TestimonialContent({ children, name, role }) {
    const { imgUrl } = useContext(TestimonialContext)
    return (
        <div className="testimonial-content">
            {imgUrl && <div className="icon">
                <FaQuoteLeft />
            </div>}
            <p className="body-text">{children}</p>
            <div className="testimonial-footer">
                <p className='footer-name'>{name}</p>
                <p className='footer-role'>{role}</p>
            </div>
        </div>
    );
}