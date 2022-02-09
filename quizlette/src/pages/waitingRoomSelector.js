import react from "react"
import { NavLink, useHistory } from 'react-router-dom';

const WaitingPage = () => {

    return (
        <>
        <NavLink className="menu-link" to="/menu">Go to Menu</NavLink>
        </>
    );
}

export default WaitingPage