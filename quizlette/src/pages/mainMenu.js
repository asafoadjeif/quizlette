import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import './welcomePage.css';


const MainMenu = ({user, sendUser, setTicket, sendTicket}) => {


  return (
    <div>


    <p className="bonjour">Bonjour {user}!</p>
    <div className="container1">
    <button className="button" >
        <Link to='/create'>Create Game</Link>
    </button>
    <div className="divider"></div>
    <br/>
    {/* <button >
        <Link to='/join'>Join Game</Link>
    </button> */}
    <button className="button">
        <Link to='/leaderboard'>LeaderBoard</Link>
    </button>
    <br/>
    <div className="divider"/>
    <button className="button">
        <Link to='/'>Quit</Link>
    </button>


    <Outlet />
    </div>
    </div>
  );
};

export default MainMenu
