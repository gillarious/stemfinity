import React from 'react';
import { Box, Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import { render } from "react-dom";
import prompt from '../assets/prompt.png';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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

  footerI: {
    position: 'fixed',
    bottom: 150,
    left: 100,
    textAlign: 'left'
  },

  footerA: {
    position: 'fixed',
    bottom: 185,
    right: 225,
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

export default function Variables2() {
    const classes = useStyles();
    const loc = button();

    return (
    <div className="Variables-header">
        <Container>
        <Grid container spacing={10}>
            <Grid item xs={12} className="title">
                <Paper className={classes.paper}>Variables (Page 2)</Paper>
            </Grid>
        </Grid>
        <Grid item spacing={10}>
            <p>You can also change a variables value throughout the program! 
                If a variable is not declared as a constant, then you can redeclare it and give it a new value.
                Here is an example:
            <br />
            <br />
            <code>i = 1 //Setting a variable, i, equal to 1</code>
            <br />
            <code>j = 2 //Setting a variable, j, equal to 2</code>
            <br />
            <br />
            We can create a new variable to hold the sum of these two variables:
            <br />
            <br />
            <code>k = i + j //Creating a new variable, k, to hold the sum of these variables</code>
            <br />
            <br />
            What should k be equal to?
            <br />
            <br />
            <code>k = 3</code> 
            <br />
            <br />
            We can also reassign a variable to hold a different value. 
            If later on we decide to change the value of k to 100, we can by simply coding "k = 100".
            <br />
            <br />
            </p>

            <Paper className={classes.paper}>
                STEM LEADER SPOTLIGHT:  <br />
            Did you know, Grace Hopper is one of the pioneers of the computer science field? <br />
            <Link to="/gracehopper">Click here to learn more!</Link></Paper>
        </Grid>
    </Container>

    <div className="button-left">
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerR}
          endIcon={<ArrowForwardIosIcon />}
        >
        <Link to="/Variables3">Next</Link>
        </Button></MuiThemeProvider></div>

      <div className="button-right">

        <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerL}
          startIcon={<ArrowBackIosIcon />}
        >
        <Link to="/Variables1">Back</Link>
        </Button>
      </MuiThemeProvider></div>
    </div>
  );
}


{/*export default Variables2; */}