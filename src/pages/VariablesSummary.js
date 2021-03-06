import React from 'react';
import { Box, Grid, withStyles, Container, makeStyles, Paper } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(rank, name, attempts) {
    return { rank, name, attempts};
  }
  
  const rows = [
    createData('1: ', "Elliot", 1),
    createData('2: ', "Maria", 1),
    createData('3: ', "Natasha", 1),
    createData('... ', "...", "...", "...", "..."),
    createData('100: ', "Billy", 4),
  ];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
      backgroundColor: '#73E08B',
      height: '1.5em',
      padding: theme.spacing(1.5),
      textAlign: 'center',
  },
}));

const button = makeStyles(theme => ({
  footerR: {
    position: 'fixed',
    bottom: 50,
    right: 50,
    textAlign: 'right'
  },

  footerL: {
    position: 'fixed',
    bottom: 50,
    left: 50, 
    textAlign: 'left'
  },

  footerC: {
    position: 'fixed',
    bottom: 50,
    left: 650,
    textAlign: 'center'
  },

  footerI: {
    position: 'fixed',
    bottom: 150,
    left: 100,
    textAlign: 'left',
  },

  footerA: {
    position: 'fixed',
    bottom: 185,
    right: 300,
    textAlign: 'left'
  }
}));

const theme = createMuiTheme({
  palette: {
      secondary: {
          main: '#FFB5EA'
      }
    },
  typography: {
      fontFamily: 'Poppins',
    },
});

export default function VariablesSummary() {
    const classes = useStyles();
    const loc = button();
    const customColumnStyle = { tableLayout: 'fixed', minWidth: 5, padding: "5px",};


  return (

    <div className="Variables-header">
    <Container>
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Paper className={classes.title}>Lesson: Variables (You Did It!)</Paper>
            </Grid>
            <Grid item xs={12}>
                You took 3 tries to get the solution correctly! Here are other's attempts:
            </Grid>
            <Grid item xs={4}>

    <MuiThemeProvider theme={theme}>
  
            <TableContainer component={Paper}>
      <Table style={{ width: 1200 }} className={loc.footerI}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Ranking</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Attempts</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.rank}>
              <StyledTableCell>
                {row.rank}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.attempts}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </MuiThemeProvider>
            </Grid>
        </Grid>
    </Container>

    <div className="button-left">
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerR}
          href="/conditionals"
          endIcon={<ArrowForwardIosIcon />}
        >Next Lesson: Conditionals
        </Button></MuiThemeProvider></div>

    <div className="button-center">
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          href="/tech/lessons"
          className={loc.footerC}
          href="/tech/lessons"
        >Back to Lessons
        </Button></MuiThemeProvider></div>

      <div className="button-right">
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerL}
          href="/variables3"
          startIcon={<ArrowBackIosIcon />}
        >Back
        </Button>
      </MuiThemeProvider></div>
    </div>
  );
}
