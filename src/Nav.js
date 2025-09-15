import { Link } from 'react-router-dom';
function Nav() {
     return (
         <>
        <nav>
            <ul className="nav-links">
                <li aria-label='Homepage'><Link to="/" >Home</Link></li>
                <li aria-label='Menu'><Link to="/Menu">Menu</Link></li>
                <li aria-label='About us'><Link to="/About">About</Link></li>
                <li aria-label="Reservations"><Link to="/Reservations">Reservations</Link></li>
                <li aria-label='Booking'><Link to="/Booking">Booking</Link></li>
            </ul>
        </nav>
        </>
        )
    }
    
export default Nav;