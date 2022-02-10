import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [currPlay, setCurrPlay] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(localStorage.getItem("player1"))

  let numOfPlayers = localStorage.getItem("players")
 
  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  // 
  const handleNextQuestion = () => {
    if (currQues > 8) {
      navigate("/summary");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  // waits for each players turn
  const  handleNextPlayer = async () => {
      if(currPlay >= numOfPlayers) {
        handleNextQuestion()
        console.log(currPlay)
        setCurrPlay(1)
        await rotatePlayer() 
      }else {
        setCurrPlay(currPlay => currPlay +1)
        setCurrQues(currQues)
        setSelected()
        console.log(currPlay)
        await rotatePlayer()      
      }
      
  }

  // change current player when it's their turn
  const rotatePlayer = () => {
     let gamer =  localStorage.getItem(`player${currPlay}`)
     setCurrentPlayer(gamer)
     console.log(gamer)
  }


  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1}:</h1>
      <h2>player {localStorage.getItem(`player${currPlay}`)}'s turn</h2>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            // href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNextPlayer}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
