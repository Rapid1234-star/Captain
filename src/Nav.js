import { Link } from 'react-router-dom';
function Nav() {
     return (
         <>
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li><Link to="/Booking">Booking</Link></li>
            </ul>
        </nav>
        </>
        )
    }
    
export default Nav;