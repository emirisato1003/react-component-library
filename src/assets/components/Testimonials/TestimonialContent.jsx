import { FaQuoteLeft } from "react-icons/fa";


export default function TestimonialContent({ children, name, role }) {
    return (
        <div className="testimonial-content">
            <div className="icon">
                <FaQuoteLeft />
            </div>
            <p className="body-text">{children}</p>
            <p className='footer-name'>{name}</p>
            <p className='footer-role'>{role}</p>
        </div>
    );
}