import react from "react"
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";




const WelcomePage = ({ setUser, sendUser, user }) => {

    const updateInput = (e) => setUser(e.target.value)
    const handleClick = () => {
        sendUser({user}) 
        
    }

    return (
         <>
         <div className="settings__select">
        
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={updateInput}
          />
          </div>
        <button onClick={handleClick()}>
        <Link className="menu-link" to="/main">Submit Name</Link>
        </button>
        </>
    );
}

export default WelcomePage