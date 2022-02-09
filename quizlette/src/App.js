import './App.css';
import { Switch, Route, Routes } from 'react-router-dom'; 
import React, { useState } from 'react'
import axios from 'axios'
import CreateRoom from './pages/createRoom';
import GameRoom from './pages/gameRoom'   ; 
import GameSummary from './pages/gameSummary';
import MainMenu from './pages/mainMenu';
import Welcome from './pages/welcomePage'


function App() {

  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [user, setUser] = useState ("Ami");
  
  const fetchQuestions = async (category = "", difficulty = "") => {
        const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
        );

        setQuestions(data.results)
    };

//  Server fetch requests = async etc...     
  const sendUser = async (user/* = {user}*/) => {
    await axios
      .post("https://quizlette.herokuapp.com/users/", {
        Name: user
      })
      .then(function () {
        alert("User created successfully");
        // window.location.reload();
      })
      .catch(function () {
        alert("Could not create account. Please try again");
      });
  }


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
        {/* <Route path="/join"><RoomSelector/></Route> */}
        <Route path="/" element={<Welcome user={user} setUser={setUser} /*sendUser={sendUser}*/ />} ></Route>
        <Route path="/main" element={<MainMenu user={user} setUser={setUser} sendUser={sendUser}/>}/>
        <Route path="/create" element={<CreateRoom user={user} fetchQuestions={fetchQuestions}/>}></Route>
        <Route path="/game" element={<GameRoom user={user} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>}></Route>
        {/* <Route path="/lobby"><Lobby/></Route> */}
        <Route path="/summary" element={<GameSummary user={user} score={score}/>}></Route>
        {/* <Route path="/leaderboard"><LeaderBoard/></Route> */}
        
      </Routes>
  

  )
}

export default App;
