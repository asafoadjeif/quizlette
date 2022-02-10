import './App.css';
import { Switch, Route, Routes } from 'react-router-dom'; 
import React, { useState } from 'react'
import axios from 'axios'
import CreateRoom from './pages/createRoom';
import GameRoom from './pages/gameRoom'   ; 
import GameSummary from './pages/gameSummary';
import MainMenu from './pages/mainMenu';
import Welcome from './pages/welcomePage'
import LeaderBoard from './pages/leaderBoard'


function App() {

  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([])
  const [users, setUsers] = useState ([]);
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
    data.sort(function(a,b) {
      return b.Wins - a.Wins
    })
    setResults(data)
  };

  
return (
  
      <Routes>
        {/* <Route exactpath="/"><Welcome/></Route> */}
        {/* <Route path="/menu"><MainMenu/></Route> */}
        {/* <Route path="/join"><RoomSelector/></Route> */}
        <Route path="/" element={<Welcome users={users} setUsers={setUsers}/*sendUser={sendUser}*/ />} ></Route>
        <Route path="/main" element={<MainMenu users={users} setUsers={setUsers}/>}/>
        <Route path="/create" element={<CreateRoom users={users} fetchQuestions={fetchQuestions}/>}></Route>
        <Route path="/game" element={<GameRoom users={users} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>}></Route>
        {/* <Route path="/lobby"><Lobby/></Route> */}
        <Route path="/summary" element={<GameSummary users={users} score={score}/>}></Route>
        <Route path="/leaderboard" element={<LeaderBoard results={results} setResults={setResults} getScores={getScores}/>}></Route>
      </Routes>
  
  )
}

export default App;
