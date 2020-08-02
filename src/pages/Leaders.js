import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';

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

export default function Leaders() {
  const classes = useStyles();

  return (
    <div className="Home">
    <Container>
        <Grid container spacing={10}>
            <Grid item xs={12} className="title">
                <Paper className={classes.paper}>Variables (Page 2)</Paper>
            </Grid>
        </Grid>
        <Grid container spacing ={10}>
          
        </Grid>
    </Container>
</div>
  );
}
