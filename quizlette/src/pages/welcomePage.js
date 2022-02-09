import react, { useEffect } from "react"
import { Button, MenuItem, TextField, FormControl, InputLabel, Select, Menu } from "@material-ui/core";
import { useState } from "react";
import { useHistory, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import NameInput from "../components/NameInput";


const WelcomePage = ({ user, setUser }) => {
    
    const updateInput = (e) => {
      setUser(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      try{
        sendUser(user) 
      } catch(err){
        console.log(err)
      }   
    }

    const sendUser = async(user) => {
      try {
        let result = await axios.post("http://localhost:8000/users", {
          Name: user
        })
        console.log(result)
      } catch (err){
        console.log(err)
      }
    }

      const [players, setPlayers] = useState([]);

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
         <form>
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
            <div>
            {players.map((player) => <NameInput onChange={updateInput}/>)}
            </div>
            <Button type="submit" onClick={handleSubmit}>
              <Link className="menu-link" to="/main">Play</Link>
            </Button>
          </div>
        </form>
        </>
    );
}

export default WelcomePage