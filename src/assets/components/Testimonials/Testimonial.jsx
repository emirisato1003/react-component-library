export default function Testimonial({ children, imgUrl }) {
    return (
        <div className="testimonial-container">
            {imgUrl && <img src={imgUrl} alt="" />}
            {children}
        </div>
    );
}

{/* <div className="testimonial-container">
            <img src="https://ben-custom-components.netlify.app/images/testimonial.jpeg" alt="" />
            <div className="testimonial-body">
                <div className="icon">
                    <FaQuoteLeft />
                </div>
                <p className="body-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit incidunt numquam atque sed aliquid quisquam harum excepturi nam nostrum sapiente?</p>
                <div className="card-footer">
                    <p className='footer-name'>May Andersons</p>
                    <p className='footer-role'>Workcation, CTO</p>
                </div>
            </div>
        </div> */}