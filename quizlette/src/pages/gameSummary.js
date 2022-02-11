import { Button } from "@material-ui/core";
import { useEffect,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './gameSummary.css'


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
    <div className="result container1">
      <div class="titleDiv">
        <span className="title">Final Score : </span>
      </div>
      
      <table >
                <thead>
                    <tr className="table">
                        <th className="table1"># </th>
                        <th className="table1">Username </th>
                        <th className="table1">Points </th>
                    </tr>
                </thead>
                <tbody>
                {isFetched == true ? playersSum.map((row, index) => (
                  <tr className="table" key={row.name + index}>
                  <td className="table">{index+1}</td>
                  <td className="table">{row.name}</td>
                  <td className="table">{row.points}</td>
        </tr>
      )) : null}  
                </tbody>
      </table>
      <div class="buttonDiv"> 
      <Button className="button1" onClick={handleWins}
        variant="contained"
        color="default"
        size="large"
      >
         <Link class="linktomain" to="/main">Back to main</Link>
      </Button>
      </div>
     
      
    </div>
  );
};

export default Result;
