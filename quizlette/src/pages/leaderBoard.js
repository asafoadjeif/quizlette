import react, { useEffect } from "react"
import { NavLink, useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const LeaderBoard = ({ getScores, results, setResults }) => {

    useEffect(() => {
        getScores()
    }, []);

 const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    
    
    return (
        <>
        <h1 className="h7">LeaderBoard</h1>
            <TableContainer className='board' component={Paper} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Wins</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {results.map( (result) => {
                        const { Name, Wins } = result
                        return (
                            <StyledTableRow
                            key={Name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            {/* <TableCell component="th" scope="row">
                                {Name}
                            </TableCell> */}
                            <TableCell align="center">{Name}</TableCell>
                            <TableCell align="center">{Wins}</TableCell>
                            </StyledTableRow>
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