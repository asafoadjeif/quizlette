import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import './welcomePage.css';


const Quiz = ({ user, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      
      {questions ? (
        <>
          <div className="quizInfo">
            <span className="h5">Quiz Category: {questions[currQues].category}</span>
            <span className="h6">
              <br/>
              {/* {questions[currQues].difficulty} */}
              Difficulty : {questions[currQues].difficulty}
            </span>
          </div>
          <Question 
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
