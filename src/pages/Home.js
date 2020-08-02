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

export default function Home() {
    const classes = useStyles();

    return (
    <div className="Home">
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={12} className="title">
                    <Paper className={classes.paper}>STEMfinity & Beyond</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Link to="/">Science</Link>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Link to="/tech/lessons">Technology</Link>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Link to="/">Engineering</Link>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Link to="/">Mathematics</Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}
