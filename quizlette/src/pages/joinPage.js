import React from 'react'
import {TextField, Button} from '@mui/material'
import {Link} from 'react-router-dom'

const JoinPage = ({gameCode, setGameCode, joinGame}) => {

    const updateInput = (e) => {
        setGameCode(e.target.value)
      }
    const handleSubmit = (e) => {
    e.preventDefault();
    try{
        joinGame() 
    } catch(err){
        console.log(err)
    }   
    }

  return (
      <>
        <form /*onSubmit={handleSubmit}*/>
            <div className="settings__select">
            <TextField
                style={{ marginBottom: 25 }}
                label="Enter Game Code"
                variant="outlined"
                onChange={updateInput}
            />
            <Button type="submit" onClick={handleSubmit}>
                <Link className="menu-link" to="/waitingRoom">Submit Name</Link>
            </Button>
            </div>
        </form>
      </>

  )
}

export default JoinPage