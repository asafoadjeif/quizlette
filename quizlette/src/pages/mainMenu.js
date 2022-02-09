import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';


const MainMenu = ({user, sendUser, setTicket, sendTicket}) => {



  useEffect( () => {
    sendUser(user)
    // sendTicket
  }, [] )


  return (
    <div>


    <p>Bonjour {user}!</p>
   
    <button >
        <Link to='/create'>Create Game</Link>
    </button>
    {/* <button >
        <Link to='/join'>Join Game</Link>
    </button> */}
    <button >
        <Link to='/leaderboard'>LeaderBoard</Link>
    </button>
    <button >
        <Link to='/'>Quit</Link>
    </button>


    <Outlet />
    </div>
  );
};

export default MainMenu
