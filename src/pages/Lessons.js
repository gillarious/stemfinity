import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Paper, makeStyles } from '@material-ui/core/';
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

export default function Lessons() {
    const classes = useStyles();

    return (
        <div className="Lessons">
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <Paper>Technology</Paper>
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
