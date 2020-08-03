import React from 'react';
import { Box, Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { render } from "react-dom";
import prompt from '../assets/prompt.png';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

const theme = createMuiTheme({
  palette: {
      secondary: {
          main: '#FFB5EA',
      }
    },
  typography: {
      fontFamily: 'Poppins',
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
      backgroundColor: '#73E08B',
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
    right: 625,
    textAlign: 'left'
  }
}));


export default function Variables3() {
    const classes = useStyles();
    const loc = button();

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    
    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
    
      if (value === 'best') {
        setHelperText('You got it!');
        setError(false);
      } else if (value === 'worst') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else if (value === 'meh') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else if (value === 'yikes') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else {
        setHelperText('Please select an option.');
        setError(true);
      }
    };

    return (
    <div className="Variables-header">
        <Container>
            <Grid container spacing={9}>
                <Grid item xs={12}>
                    <Paper className={classes.title}>Lesson: Variables (Review)</Paper>
                </Grid>
                <Grid item xs={12}>
                    Let's review what you learned! See if you can solve the example problem below.
                </Grid>
                <Grid item xs={8}>
                    <Paper className={loc.footerI}><img src={prompt} alt="prompt"/></Paper>
                </Grid>
            </Grid>
        </Container>


    <div className="button-left">
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerR}
          href="/variablessummary"
          endIcon={<ArrowForwardIosIcon />}
        >
        Next
        </Button></MuiThemeProvider></div>

      <div className="button-right">

      <MuiThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={loc.footerA}>
        <FormLabel component="legend">What will be the output?</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="best" control={<Radio />} label="A: 18" />
          <FormControlLabel value="yikes" control={<Radio />} label="B: 17" />
          <FormControlLabel value="meh" control={<Radio />} label="C: 19" />
          <FormControlLabel value="worst" control={<Radio />} label="D: None of the Above" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
          Check Answer
        </Button>
      </FormControl>
    </form>
    </MuiThemeProvider>

        <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerL}
          href="/variables2"
          startIcon={<ArrowBackIosIcon />}
        >
        Back
        </Button>
      </MuiThemeProvider></div>
    </div>
  );
}


{/*export default Variables3; */}