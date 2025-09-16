function Footer() { 
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Little Lemon</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div className="footer-section">
                    <h3>Opening Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Main Street, Chicago, IL</p>
                    <p>Tel: (123) 456-7890</p>
                    <p>Email: info@littlelemon.com</p>
                </div>
            </div>
            <div className="copyright">
                <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;