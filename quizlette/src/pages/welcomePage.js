import react, { useEffect } from "react"
import { Button, MenuItem, TextField, FormControl, InputLabel, Select, Menu } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import NameInput from "../components/NameInput";
import './welcomePage.css';
import Logo from './Logo.png';


const WelcomePage = () => {
    
    const [players, setPlayers] = useState([]);
    const [gamersArray, setGamersArray] = useState([])
    const [added, setAdded] = useState(false)
    let playersArray = []
   
    const sendUsers = async(users) => {
      try {
        let result = await axios.post("https://quizlette.herokuapp.com/users", {
          Name: users
        })
        await setGamersArray([])
        await playersArray.push(result.data.id)
        await setGamersArray(playersArray)
        return result
      } catch (err){
        console.log(err)
      }
    }
    console.log(gamersArray)

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        for(let player in players) {
          let playerNum = parseInt(player)
          let playerName =  e.target[playerNum+playerNum+1].value
          let result = await sendUsers(playerName)
          localStorage.setItem(`player${playerNum+1}`, result.data.id)
          localStorage.setItem(`playerName${playerNum+1}`, result.data.name)
          console.log(result)
          console.log(playerName)
        }
        localStorage.setItem(`players` , players.length)
        setAdded(true)

      } catch(err){
        console.log(err)
      }   
    }

      const handleChange = (e) => {
        setPlayers([])
        let playersArr= []
        let count = e.target.value
        for(let i = 0; i < count ; i++){
          playersArr.push(i)
        };
        setPlayers(playersArr)
      }

    return (
        <div className="welcomeroot">
            <div className="box">
              <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
         
            <div className="settings__select"></div>  
         <form onSubmit={handleSubmit}>
          <div className="settings__select">
            <FormControl fullWidth>
            <InputLabel className="inputbox" id="demo-simple-select-label">Number of Players</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={players}
            label="Age"
            onChange={handleChange}
            >
              <MenuItem id="itemonMenu" value={1}>1</MenuItem>
              <MenuItem id="itemonMenu" value={2}>2</MenuItem>
              <MenuItem id="itemonMenu" value={3}>3</MenuItem>
              <MenuItem id="itemonMenu" value={4}>4</MenuItem>
            </Select>
            </FormControl>
            <div >
            {players.map((player) => <NameInput/>)}
            </div>
            <Button id="muiButtonAdd" className="button" type="submit">Add Players</Button>             
          </div>
        </form>
        <Button disabled={!added}><Link className="menu-link" to="/main">Play</Link></Button>
        
        </div>
    </div>
    );
    }

export default WelcomePage