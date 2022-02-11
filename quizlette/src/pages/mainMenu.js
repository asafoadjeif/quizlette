import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import './welcomePage.css';


const MainMenu = ({user, sendUser, setTicket, sendTicket}) => {

  // let player1 = localStorage.getItem("player1")
  // let player2 = localStorage.getItem("player2")
  let numOfPlayers = localStorage.getItem("players")
  console.log(numOfPlayers)
  return (
    <div>


    <p className="bonjour"> {numOfPlayers} player(s) are in this lobby!</p>
    <div className="container1">

    <button className="button">
        <Link class="randomstyleLink" to='/create'>Create Game</Link>
    </button>
    <div className="divider"></div>
    <br/>
    {/* <button >
        <Link to='/join'>Join Game</Link>
    </button> */}
    <button className="button">
        <Link class="randomstyleLink" to='/leaderboard'>LeaderBoard</Link>
    </button>
    <br/>
    <div className="divider"/>
    <button className="button">
        <Link class="randomstyleLink" to='/'>Quit</Link>
    </button>


    <Outlet />
    </div>
    </div>
  );
};

export default MainMenu
