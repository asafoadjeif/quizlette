import react from "react"
import { NavLink, useHistory } from 'react-router-dom';

const WelcomePage = () => {

    return (
        <span>
            
        {/* <NavLink className="menu-link" to="/lobby">Go to Menu</NavLink> */}
        <NavLink className="menu-link" to="/menu">Go to Menu</NavLink>
        </span>
    );
}