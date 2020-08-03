import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import gracehopper from '../assets/people/gracehopper.jpeg';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontFamily: "Poppins",
  },
  title: {
    padding: theme.spacing(1.5),
    height:'1.5em',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#73E08B',
    fontFamily: "Poppins",
  },
  img: {
    display: 'block',
    padding: theme.spacing(2),
    width: "100%",
    height: "100%",
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
    left: 10,
    textAlign: 'left'
  },
}));

const theme = createMuiTheme({
  palette: {
      secondary: {
          main: '#FFB5EA'
      }
    },
  typography: {
      fontFamily: 'Poppins',
      text: 'Black',
    },
});

export default function Leaders() {
  const classes = useStyles();
  const loc = button();

  return (
    <div className="Home">
    <Container>
        <Grid container spacing={10}>
            <Grid item xs={12} className="title">
                <Paper className={classes.title}>STEM Leaders</Paper>
            </Grid>
        </Grid>
        <Grid item spacing={10}>
          <p>
            Grace Hopper: Computer Scientist
          </p>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs={4} wrap="nowrap">
            <img className={classes.img} alt="Grace Hopper in a military uniform" src ={gracehopper} />
          </Grid>
          <Grid item xs wrap="nowrap">
            <p style={{textAlign:"left"}}>
              Grace Murray Hopper, born in New York City in 1906, studied math and physics after enrolling at Vassar at 17.
              She is credited for inventing a compiler in 1952 that translated English into computer code. This invention paved 
              the way for the creation of COBOL and Fortran, which made it possible for non-programming experts to do their own programming!
              She continued working on projects for the US Navy, and was even promoted to the role of admiral by Ronald Reagan. 
              She retired in 1986, but her legacy lives on in many ways. Her former students made Vassar one of the first liberal
              arts colleges with a computer center, and now one of the biggest celebrations of women in computing is named for her.
            </p>
          </Grid>
        </Grid>
      </Container>
      <Grid item>
      <MuiThemeProvider theme={theme}>
            <Button
                variant="contained"
                color="secondary"
                className={loc.footerL}
                href="/leaders"
                startIcon={<ArrowBackIosIcon />}
            >
                Back
            </Button>
        </MuiThemeProvider>
      </Grid>
      
      
    </div>
  );
}
