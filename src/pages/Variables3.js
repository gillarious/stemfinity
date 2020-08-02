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
  typography: {
      fontFamily: 'Poppins',
    },
});

export default function Variables3() {
    const classes = useStyles();
    const loc = button();

    return (
    <div className="App-header">
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>STEMfinity & Beyond</Paper>
                </Grid>
            </Grid>
        </Container>

    <div className="button-left">
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerR}
          endIcon={<ArrowForwardIosIcon />}
        >
        Next
        </Button></MuiThemeProvider></div>

      <div className="button-right">
        <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerL}
          startIcon={<ArrowBackIosIcon />}
        >
        Back
        </Button>
      </MuiThemeProvider></div>
    </div>
  );
}


{/*export default Variables3; */}