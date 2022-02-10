import react, { useEffect } from "react"
import { Button, MenuItem, TextField, FormControl, InputLabel, Select, Menu } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import NameInput from "../components/NameInput";

const WelcomePage = () => {
    
    const [players, setPlayers] = useState([]);
    const [gamersArray, setGamersArray] = useState([])
    let playersArray = []
   
    const sendUsers = async(users) => {
      try {
        let result = await axios.post("http://localhost:8000/users", {
          Name: users
        })
        await setGamersArray([])
        await playersArray.push(result.data.id)
        await setGamersArray(playersArray)
      } catch (err){
        console.log(err)
      }
    }
    console.log(gamersArray)

    const handleSubmit = (e) => {
      e.preventDefault();
      try{
        for(let player in players) {
          let playerNum = parseInt(player)
          let playerName =  e.target[playerNum+playerNum+1].value
          sendUsers(playerName)
          console.log(playerName)
        }
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
         <>
         <form onSubmit={handleSubmit}>
          <div className="settings__select">
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Number of Players</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={players}
            label="Age"
            onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
            </FormControl>
            <div >
            {players.map((player) => <NameInput/>)}
            </div>
            <Button type="submit">Add Players  
            </Button>
          </div>
        </form>
        <Button><Link className="menu-link" to="/main">Play</Link></Button>
        </>
    );
}

export default WelcomePage