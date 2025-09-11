import { Link } from 'react-router-dom';
function Nav() {
     return (
         <>
        <nav>
            <ul>
                <li><Link to="/Homepage">Home</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Reservations">Reservations</Link></li>
            </ul>
        </nav>
        </>
        )
    }
    
export default Nav;