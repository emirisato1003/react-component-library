import { FaQuoteLeft } from "react-icons/fa";


export default function TestimonialContent({ children, name, role }) {
    return (
        <div className="testimonial-content">
            <div className="icon">
                <FaQuoteLeft />
            </div>
            <p className="body-text">{children}</p>
            <div className="testimonial-footer">
                <p className='footer-name'>May Andersons</p>
                <p className='footer-role'>Workcation, CTO</p>
            </div>
        </div>
    );
}