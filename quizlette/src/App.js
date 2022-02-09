import './App.css';
import { Switch, Route, Routes, useNavigate } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import CreateRoom from './pages/createRoom';
import GameRoom from './pages/gameRoom'   ; 
import GameSummary from './pages/gameSummary';
import MainMenu from './pages/mainMenu';
import Welcome from './pages/welcomePage';
import LeaderBoard from './pages/leaderBoard';
import JoinPage from './pages/joinPage'
import io from 'socket.io-client';


import {
  changeState,
  storeSocket,
  addUser,
  updateScore,
  setQuizAsComplete,
} from "./actions";


function App() {
  const [gameCode, setGameCode] = useState("");

  const socket = io('http://localhost:8000');

  socket.on('joinGame', handleJoin);
  socket.on('createGame', handleCreate);
  socket.on('results', handleResults );

  const handleJoin = () => {
    socket.emit()
  }

  const handleCreate = () => {

  }

  const handleResults = () => {

  }

  function handleInit(number) {
    playerNumber = number;
  }
  

  const newGame = () => {
    socket.emit('newGame');
    init();
  }

  const joinGame = () => {
    const code = gameCode;
    socket.emit('joinGame', {code})
    init();
  }

  const navigate = useNavigate();

  function init() {
    navigate('/quiz')
  }

  function compareScore() {
    socket.emit('complete quiz', {room: gameState.roomName, user: clientUser})
  }

  // useEffect(() => {
  //   // connect to socket io on conditions being met
    
  //   socket.on("change state", (state) => {
  //     dispatch
  //   })
    
  // }, [])
  
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([])
  const [user, setUser] = useState ("");
  const [id, setId] = useState ("");
  const [ticket, setTicket] = useState('');
  
  const randomTicket = Math.random()

  const fetchQuestions = async (category = "", difficulty = "") => {
        const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
        );

        setQuestions(data.results)
    };

//  Server fetch requests = async etc...     
  

  const getScores = async () => {
    const { data } = await axios.get(`https://quizlette.herokuapp.com/users`);
    console.log(data)
    setResults(data)
  };

  


  // const sendScore = async (user/* = {user}*/) => {
  //   await axios
  //     .patch(`https://quizlette.herokuapp.com/users/${}/points`, {
  //       Points: score
  //     })
  //     .then(function () {
  //       alert("Points successfully");
  //       // window.location.reload();
  //     })
  //     .catch(function () {
  //       alert("Could not create account. Please try again");
  //     });
  // }


return (
  
      <Routes>
        {/* <Route exactpath="/"><Welcome/></Route> */}
        {/* <Route path="/menu"><MainMenu/></Route> */}
        <Route path="/join" element={<JoinPage gameCode={gameCode} setGameCode={setGameCode} joinGame={joinGame}/>}></Route>
        <Route path="/" element={<Welcome user={user} setUser={setUser} /*sendUser={sendUser}*/ />} ></Route>
        <Route path="/main" element={<MainMenu user={user} setUser={setUser}/>}/>
        <Route path="/create" element={<CreateRoom user={user} fetchQuestions={fetchQuestions} newGame={newGame}/>}></Route>
        <Route path="/game" element={<GameRoom user={user} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>}></Route>
        {/* <Route path="/lobby"><Lobby/></Route> */}
        <Route path="/summary" element={<GameSummary user={user} score={score}/>}></Route>
        <Route path="/leaderboard" element={<LeaderBoard results={results} setResults={setResults} getScores={getScores}/>}></Route>
      </Routes>
  
  )
}

export default App;
