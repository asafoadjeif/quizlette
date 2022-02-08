import react, { useState } from "react"
import { NavLink, useHistory } from 'react-router-dom';
import login from '../actions/login';


const MainMenu = () => {

    const [ user, setUser ] = useState('friend')
    
    const loadUser = async () => {
        setUser({response})
    }




    return (
        <span>
            
            <p>Hello {user}! What would you like to do?</p>


            <NavLink className="active-link" to="/create">Create Room</NavLink>
            <NavLink className="active-link" to="/join">Join Room</NavLink>
            <NavLink className="active-link" to="/leaderboard">Leader Board</NavLink>
        </span>
    );
}