import React from 'react';
import { Box, Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import variables_img from '../assets/lessons/variables_img.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        display: 'block', 
        width: "50%",
        height: "50%",
    }
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
    }
}));

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#FFB5EA'
        }
    },
});

export default function Variables1() {
    const classes = useStyles();
    const loc = button();

    return (
        <div className="App-header">
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} className="title">
                        <Paper className={classes.paper}>Variables (Page 1)</Paper>
                    </Grid>
                </Grid>
                <Grid item spacing={10}>
                    <p>
                        <u>Variables: What are they?</u>
                    </p>
                </Grid>
                <Grid item xs wrap="nowrap">
                    <p style={{ textAlign: "left" }}>
                        <strong>Variables</strong> are what we use to save and store important values that we can use throughout a
                        program. They store all sorts of information such as words, numbers, etc. Variables are super flexible and 
                        you are able to change the information inside of the variable at any time!                     
                    </p>
                </Grid>
                <Grid item spacing={10}>
                    <p>
                        <br/><br/><u>Variables: How do we "define" them?</u>
                    </p>
                </Grid>
                <Grid item xs wrap="nowrap">
                    <p style={{ textAlign: "left" }}>
                            When you create a variable and assign it a value, you are <strong>defining</strong> them. To properly define a variable,
                            you must write the variable name followed by an "=", a.k.a the <strong>assignment operator</strong>, and finally write down the item
                            you want to store inside of the variable on the right-hand side. (Tip: Think about variables used in mathematics, we assign values
                            to variables and we can reference the value the variable contains by just using the variable name.) Here's some examples of
                            defining variables:<br /><br />
                            x = 3<br />
                            my_greeting = "Hi"<br />
                            PI = 3.14<br />
                    </p>
                </Grid>
                <center>
                     <img className={classes.img} alt="What can you store in variables?" src={variables_img} />
                </center>
            </Container>
            <MuiThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color="secondary"
                    className={loc.footerR}
                    href="/variables2"
                    endIcon={<ArrowForwardIosIcon />}
                >
                    Next
        </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    className={loc.footerL}
                    href="/variables0"
                    startIcon={<ArrowBackIosIcon />}
                >
                    Back
        </Button>
            </MuiThemeProvider>
        </div>

    );
}


{/*export default Variables3; */ }