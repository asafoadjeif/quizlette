import react from "react"
import { NavLink, useHistory } from 'react-router-dom';
import login from '../actions/login';

const WelcomePage = () => {

    return (
        <>
        <NavLink className="menu-link" to="/menu">Go to Menu</NavLink>
        </>
    );
}