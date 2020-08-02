import React from 'react';
import { Box, Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


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

const theme = createMuiTheme({
  palette: {
      secondary: {
          main: '#FFB5EA'
      }
    },
});

export default function Variables3() {
    const classes = useStyles();

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
          color = "secondary"
          className={classes.button}
          endIcon={<ArrowForwardIosIcon />}
        >
        Next
        </Button>

        <Button
          variant="outlined"
          color = "secondary"
          className={classes.button}
          startIcon={<ArrowBackIosIcon />}
        >
        Back
        </Button>
      </MuiThemeProvider>
    </div>

  );
}


{/*export default Variables3; */}