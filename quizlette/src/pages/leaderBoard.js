import react from "react"
import { NavLink, useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const LeaderBoard = ({ getScores, results, setResults }) => {

    getScores()
    console.log(results)
    
    return (
        <>
        <h1>LeaderBoard</h1>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="right">Points</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {results.map( (result) => {
                        const { Name, Points } = result
                        return (
                            <TableRow
                            key={Name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            {/* <TableCell component="th" scope="row">
                                {Name}
                            </TableCell> */}
                            <TableCell align="left">{Name}</TableCell>
                            <TableCell align="right">{Points}</TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            <button>
                <NavLink className="menu-link" to="/main">Go to Menu</NavLink>
            </button>
        </>
    );
}

export default LeaderBoard;