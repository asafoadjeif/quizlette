import react from "react"
import { NavLink, useHistory } from 'react-router-dom';

const MainMenu = () => {

    return (
        <>
        <NavLink className="active-link" to="/create">Create Room</NavLink>
        <NavLink className="active-link" to="/join">Join Room</NavLink>
        <NavLink className="active-link" to="/leaderboard">Leader Board</NavLink>
        </>
    );
}