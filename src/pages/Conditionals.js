import React from 'react';
import { Box, Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import conditionals_img from '../assets/lessons/conditionals_1.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#73E08B',
        color: 'black',
    },
    img: {
        display: 'block',
        width: "15%",
        height: "15%",
    },
    title: {
        backgroundColor: '#73E08B',
        textAlign: 'center'
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
                <Grid container spacing={9}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Conditionals</Paper>
                    </Grid>
                </Grid>
            <center>
                <p></p>
                <img className={classes.img} alt="Conditionals help with program flow" src={conditionals_img} />
            </center>
            <Typography variant="h6" align="center" color="black" paragraph>
                <br />In this lesson, you&apos;ll learn:<br />
                <br />
                1. What a conditional statement is and why it&apos;s important in computing<br />
                2. The different types of conditionals<br />
                3. How to use conditionals<br/>
            </Typography>
        </Container>
        <div className="button-left">
            <MuiThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color="secondary"
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
