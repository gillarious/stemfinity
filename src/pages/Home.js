import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import science from '../assets/home/science.jpg'
import tech from '../assets/home/tech.jpg'
import engineering from '../assets/home/engineering.jpg'
import math from '../assets/home/math.jpg'
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        backgroundColor: '#73E08B',
    },
    science: {
        padding: theme.spacing(2),
        height: '8.5em',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
            content: '""',
            backgroundImage: `url(${science})`,
            backgroundSize: 'cover',
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            opacity: 0.6,
        },
    },
    tech: {
        padding: theme.spacing(2),
        height: '8.5em',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
            content: '""',
            backgroundImage: `url(${tech})`,
            backgroundSize: 'cover',
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            opacity: 0.6,
        },
    },
    engineering: {
        padding: theme.spacing(2),
        height: '8.5em',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
            content: '""',
            backgroundImage: `url(${engineering})`,
            backgroundSize: 'cover',
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            opacity: 0.6,
        },
    },
    math: {
        padding: theme.spacing(2),
        height: '8.5em',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
            content: '""',
            backgroundImage: `url(${math})`,
            backgroundSize: 'cover',
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            opacity: 0.6,
        },
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
    <div className="Home">
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={12} className="title">
                    <Paper className={classes.title}>STEMfinity & Beyond</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.science}>
                        <Link to="/">Science</Link>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tech}>
                        <Link to="/tech/lessons">Technology</Link>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.engineering}>
                        <Link to="/">Engineering</Link>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.math}>
                        <Link to="/">Mathematics</Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}
