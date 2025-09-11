import React from 'react';
import  {Route, Routes} from 'react-router-dom';
import Home from './Homepage';
import Menu from './Menu';
import About from './About';
import Reservations from './Reservations';
function Main() { 
    return(
        <>
        <main>
            <Routes>
                 <Route path="/Homepage" element={<Home />} />
                 <Route path="/Menu" element={<Menu />} />
                 <Route path="/About" element={<About />} />
                 <Route path="/Reservations" element={<Reservations />} />
             </Routes>
        </main>
        </>
    )
}

export default Main;