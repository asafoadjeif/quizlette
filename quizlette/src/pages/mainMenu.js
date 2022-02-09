import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';


const MainMenu = ({user, sendUser}) => {

  useEffect( () => {
    sendUser(user) 
  }, [])


  return (
    <div>


    <p>Bonjour {user}!</p>
   
    <button >
        <Link to='/create'>Create Game</Link>
    </button>
    <button >
        <Link to='/create'>Join Game</Link>
    </button>
    <button >
        <Link to='/create'>LeaderBoard</Link>
    </button>
    <button >
        <Link to='/'>Quit</Link>
    </button>


    <Outlet />
    </div>
  );
};

export default MainMenu
