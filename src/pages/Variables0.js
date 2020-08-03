import React from 'react';
import { Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import variables_img from '../assets/lessons/variables_img.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#73E08B',
        color: theme.palette.text.secondary,
    },
    img: {
        display: 'block',
        width: "20%",
        height: "20%",
     
    },
    title: {
        backgroundColor: '#73E08B',
    }
}));

const button = makeStyles(theme => ({
  footer: {
    position: 'fixed',
    bottom: 50,
    right: 585,
    textAlign: 'center'
  },

  footerL: {
    position: 'fixed',
    bottom: 50,
    left: 50,
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

export default function Variables0() {
    const classes = useStyles(); 
    const loc = button();
    return (
        <div className="App-header">
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Lesson: Variables (Review)</Paper>
                    </Grid>
                </Grid>
            <center>
                <p></p>
                <img className={classes.img} alt="Variables are fun!" src={variables_img} />
            </center>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                <br/>In this lesson, you&apos;ll learn:<br />
                <br />
                1. What a variable is, and why it&apos;s important in computing<br />
                2. How to declare and initialize a variable<br />
                3. Variable manipulation<br/>
                </Typography>
            </Container>
            <div className="button-left">
                <MuiThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="/variables1"
                        className={loc.button}
                    >
                        Let's Begin!
        </Button></MuiThemeProvider></div>

            <div className="button-center">
                <MuiThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={loc.footerL}
                        href='/tech/lessons'
                        startIcon={<ArrowBackIosIcon />}
                    >
                        Back
        </Button>
                </MuiThemeProvider></div>
        </div>
    );
}
