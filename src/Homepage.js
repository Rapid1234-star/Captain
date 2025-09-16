import { Link } from "react-router-dom";
function Home () {
    return (
        <div className="homepage">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/Booking"><button className="cta-button">Reserve a Table</button></Link>
                </div>
                <div className="hero-image">
                    {/* Placeholder for hero image */}
                    <div className="image-placeholder"></div>
                </div>
            </section>
            <section className="specials-section">
                <div className="section-header">
                    <h2>This week's specials!</h2>
                    <button className="secondary-button">Online Menu</button>
                </div>
                <div className="specials-cards">
                    <div className="special-card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Greek Salad</h3>
                                <span className="price">$12.99</span>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    </div>
                    <div className="special-card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Bruschetta</h3>
                                <span className="price">$5.99</span>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    </div>
                    <div className="special-card">
                        <div className="card-image"></div>
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Lemon Dessert</h3>
                                <span className="price">$5.00</span>
                            </div>
                            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;