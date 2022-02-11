import react from "react"
import { NavLink } from 'react-router-dom';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Categories from "../data/Categories";
import './welcomePage.css';


const CreateRoom = ({ user, fetchQuestions}) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/game");
    }
  };

    return (
    <div className="content">
      <div className="settings">
      <p className="p">Hi, choose the quiz settings</p>
      <div className="container3">
        <span className="p1" style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="divider"/>

        <div className="settings__select">
          {/* {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>} */}
          {/* <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
          /> */}
          <div className="category">
          <TextField id="helloWorld" className="select"
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          </div>
          <div className="divider1"/>
          <div className="difficulty">
          <TextField id="helloWorld" className="select"
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          </div>
          <div className="divider1"></div>
          <Button className="button11" onClick={handleSubmit}> Start Quiz </Button>
        </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CreateRoom;