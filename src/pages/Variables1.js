import React from 'react';
import { Box, Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
<<<<<<< HEAD
=======
import variables_img from '../assets/lessons/variables_img.png';
>>>>>>> d31c7e62aea8954411f6f1394aa2b935da745dde


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
<<<<<<< HEAD
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
=======
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        display: 'block', 
        width: "20%",
        height: "20%",
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
>>>>>>> d31c7e62aea8954411f6f1394aa2b935da745dde
}));

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#FFB5EA'
        }
    },
<<<<<<< HEAD
=======
    typography: {
        fontFamily: 'Poppins',
    }
>>>>>>> d31c7e62aea8954411f6f1394aa2b935da745dde
});

export default function Variables1() {
    const classes = useStyles();
<<<<<<< HEAD

    return (
        <div className="App-header">
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>STEMfinity & Beyond</Paper>
                    </Grid>
                </Grid>
            </Container>
            <MuiThemeProvider theme={theme}>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
=======
    const loc = button();

    return (
        <div className="Variable-header">
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} className="title">
                        <Paper className={classes.paper}>Variables (Page 1)</Paper>
                    </Grid>
                </Grid>
                <Grid item spacing={10}>
                    <p style={{ textAlign: "center" }}>
                        <u>Variables: What are they?</u><br/>
                        <strong>Variables</strong> are what we use to save and store important values that we can use throughout a
                        program. They store all sorts of information such as words, numbers, etc. Variables are super flexible and 
                        you are able to change the information inside of the variable at any time!                     
                    
                        <br/><br/><u>Variables: How do we "define" them?</u><br/>
          
                        When you create a variable and assign it a value, you are <strong>defining</strong> them. In order to properly define a variable,
                        you must write the variable name followed by the "=" sign, a.k.a. the <strong>assignment operator</strong> in programming, 
                        and finally write down the item you want to store inside of the variable on the right-hand side. (Tip: Think about variables 
                        used in mathematics, we assign values to variables and we can reference the value the variable contains by just using the 
                        variable name.) Here's some examples of defining variables:<br /><br />
                            <code>x = 3</code><br />
                            <code>my_greeting = "Hi"</code><br />
                            <code>PI = 3.14<br /></code>
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
>>>>>>> d31c7e62aea8954411f6f1394aa2b935da745dde
                    endIcon={<ArrowForwardIosIcon />}
                >
                    Next
        </Button>

<<<<<<< HEAD
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ArrowBackIosIcon />}
                >
                    Back
        </Button>
            </MuiThemeProvider>
        </div>

    );
=======
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
>>>>>>> d31c7e62aea8954411f6f1394aa2b935da745dde
}


{/*export default Variables3; */ }