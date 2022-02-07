import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 


function App() {
return (
  <main>
    <switch>
      <Route exactpath="/"><Welcome/></Route>
      <Route path="/menu"><MainMenu/></Route>
      <Route path="/join"><RoomSelector/></Route>
      <Route path="/create"><CreateRoom/></Route>
      <Route path="/game"><GameRoom/></Route>
      <Route path="/lobby"><Lobby/></Route>
      <Route path="/summary"><GameSummary/></Route>
      <Route path="/leaderboard"><LeaderBoard/></Route>
    </switch>
  </main>
  )
}

export default App;
