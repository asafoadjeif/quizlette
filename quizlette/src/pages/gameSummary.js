import { Button } from "@material-ui/core";
import { useEffect,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Result = () => {
  const navigate = useNavigate();
  const [playersSum, setPlayersSum] = useState()
  const [isFetched, setisFetched] = useState(false)

  useEffect(() => {
    getSummary()
  }, []);

  let numOfPlayers = localStorage.getItem("players")


  const getSummary = async() => {
    let playersSumArr = []
    for (let i = 1 ; i <= numOfPlayers; i++) {
      console.log(i)
      let result = await axios.get(`http://localhost:8000/users/${localStorage.getItem(`player${[i]}`)}`)
      let obj = {"name": result.data.Name, "points" : result.data.Points, "id": result.data._id }
      playersSumArr.push(obj)
    }
    playersSumArr.sort(function(a,b) {
      return b.points - a.points
    })
    setPlayersSum(playersSumArr)
    setisFetched(true)
  }

  const handleWins = async() => {
    console.log("hi")
    let data = await axios.patch(`http://localhost:8000/users/${playersSum[0].id}/wins`)
    let data2 = await axios.patch(`http://localhost:8000/users/points/reset`)
  }


  return (
    <div className="result">
      <span className="title">Final Score : </span>
      <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                {isFetched == true ? playersSum.map((row, index) => (
                  <tr key={row.name + index}>
                  <td>{index+1}</td>
                  <td>{row.name}</td>
                  <td>{row.points}</td>
        </tr>
      )) : null}  
                </tbody>
            </table>
      <Button onClick={handleWins}
        variant="contained"
        color="secondary"
        size="large"
        // style={{ alignSelf: "center", marginTop: 20 }}
        // href="/"
      >
       <Link  to="/main">Back to main</Link>
      </Button>
    </div>
  );
};

export default Result;
