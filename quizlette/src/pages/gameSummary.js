import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


const Result = ({ score }) => {
  const navigate = useNavigate();


  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        // style={{ alignSelf: "center", marginTop: 20 }}
        // href="/"
      >
       <Link to="/">Back to main</Link>
      </Button>
    </div>
  );
};

export default Result;
