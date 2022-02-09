import react, { useEffect } from "react"
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory, Link, useNavigate } from "react-router-dom";
import axios from 'axios'




const WelcomePage = ({ setUser, user }) => {


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

    const sendUser = async (user/* = {user}*/) => {
    await axios
      .post("http://localhost:8000/users", {
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
    return (
         <>
         <form /*onSubmit={handleSubmit}*/>
          <div className="settings__select">
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter Your Name"
              variant="outlined"
              onChange={updateInput}
            />
            <Button type="submit" onClick={handleSubmit}>
              <Link className="menu-link" to="/main">Submit Name</Link>
            </Button>
          </div>
        </form>
        </>
    );
}

export default WelcomePage