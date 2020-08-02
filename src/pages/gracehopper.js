import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import gracehopper from '../assets/people/gracehopper.jpeg';

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
    padding: theme.spacing(2),
    width: "100%",
    height: "100%",
  }
}));

export default function Leaders() {
  const classes = useStyles();

  return (
    <div className="Home">
    <Container>
        <Grid container spacing={10}>
            <Grid item xs={12} className="title">
                <Paper className={classes.paper}>STEM Leaders</Paper>
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
    </div>
  );
}
