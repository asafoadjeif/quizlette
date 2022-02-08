import './App.css';
import { Switch, Route, Routes } from 'react-router-dom'; 
import React, { useState } from 'react'
import axios from 'axios'
import CreateRoom from './pages/createRoom';
import GameRoom from './pages/gameRoom'   ; 
import GameSummary from './pages/gameSummary';
import MainMenu from './pages/mainMenu';



function App() {

  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  // const [user, setUser] = useState ("ami")
  
  const fetchQuestions = async (category = "", difficulty = "") => {
        const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
        );

        setQuestions(data.results)
    };

//  Server fetch requests = async etc...     
// 


return (
  
      <Routes>
        {/* <Route exactpath="/"><Welcome/></Route> */}
        {/* <Route path="/menu"><MainMenu/></Route> */}
        {/* <Route path="/join"><RoomSelector/></Route> */}
        <Route path="/" element={<MainMenu />} ></Route>
          <Route path="/create" element={<CreateRoom fetchQuestions={fetchQuestions}/>}></Route>
          <Route path="/game" element={<GameRoom questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>}></Route>
          {/* <Route path="/lobby"><Lobby/></Route> */}
          <Route path="/summary" element={<GameSummary score={score}/>}></Route>
          {/* <Route path="/leaderboard"><LeaderBoard/></Route> */}
        
      </Routes>
  

  )
}

export default App;
