import React from 'react';
import { Grid, Container, makeStyles, Paper } from '@material-ui/core/';
import '../App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import gracehopper from '../assets/people/gracehopper.jpeg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        padding: theme.spacing(1.5),
        height:'1.5em',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#73E08B',
        fontFamily: "Poppins",
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontFamily: "Poppins",
    },
    img: {
        display: 'block',
        width: "175px",
        height: "250px",
        textAlign: 'center',
        margin: 'auto',
    },
    textInfo: {
        textAlign: 'center',
        margin: 'auto',
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
}));

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
});
  
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography theme={theme}>{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
});
  
const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
}))(MuiDialogContent);
  
const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
}))(MuiDialogActions);

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

export default function Variables2(){
    const classes = useStyles();
    const loc = button();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <div className="Variables-header">
        <Container>
        <Grid container spacing={10}>
            <Grid item xs={12} className="title">
                <Paper className={classes.title} style={{background:""}}>Variables (Page 2)</Paper>
            </Grid>
        </Grid>
        <Grid item spacing={10}>
            <p>You can also change a variables value throughout the program! 
                If a variable is not declared as a constant, then you can redeclare it and give it a new value.
                Here is an example:
            <br />
            <br />
            <code>i = 1 //Setting a variable, i, equal to 1</code>
            <br />
            <code>j = 2 //Setting a variable, j, equal to 2</code>
            <br />
            <br />
            We can create a new variable to hold the sum of these two variables:
            <br />
            <br />
            <code>k = i + j //Creating a new variable, k, to hold the sum of these variables</code>
            <br />
            <br />
            What should k be equal to?
            <br />
            <br />
            <code>k = 3</code> 
            <br />
            <br />
            We can also reassign a variable to hold a different value. 
            If later on we decide to change the value of k to 100, we can by simply coding "k = 100".
            <br />
            <br />
            </p>

            <Paper className={classes.paper}>
            <span role="img" aria-label="Sparkles">✨</span>
            STEM LEADER SPOTLIGHT <span role="img" aria-label="Sparkles">✨</span><br />
            Did you know, Grace Hopper is one of the pioneers of the computer science field - fundamental to the variables we know and use today? <br />
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Click here to learn more about Grace Hopper!
      </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Grid item xs={12} className="title">
                        <Paper className={classes.title}>STEM Leaders</Paper>
                    </Grid>
                </DialogTitle>
            <DialogContent dividers>
            <Grid container spacing={10}>
            <Grid className={classes.textInfo} item xs={10} padding ='auto'>
                <p>Grace Hopper: Computer Scientist</p>
            </Grid>
            <Grid item xs wrap="nowrap">
                <img className={classes.img} alt="Grace Hopper in a military uniform" src ={gracehopper} />
            </Grid>
            <Grid item wrap="nowrap" padding='auto'>
            <p style={{textAlign:"left"}}>
              Grace Murray Hopper, born in New York City in 1906, studied math and physics after enrolling at Vassar at 17.
              She is credited for inventing a compiler in 1952 that translated English into computer code. This invention paved 
              the way for the creation of COBOL and Fortran, which made it possible for non-programming experts to do their own programming!
              One of COBOL's original ideas was to allow identifiers to be long enough to be meaningful, which in turn made code a lot more readable.
              She continued working on projects for the US Navy, and was even promoted to the role of admiral by Ronald Reagan. 
              She retired in 1986, but her legacy lives on in many ways. Her former students made Vassar one of the first liberal
              arts colleges with a computer center, and now one of the biggest celebrations of women in computing is named for her.
            </p>
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Go Back
          </Button>
        </DialogActions>
      </Dialog>
            </Paper>
        </Grid>
    </Container>

    <div className="button-left">
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerR}
          href ="/variables3"
          endIcon={<ArrowForwardIosIcon />}
        >Next
        </Button></MuiThemeProvider></div>

      <div className="button-right">

        <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color = "secondary"
          className={loc.footerL}
          href="/variables1"
          startIcon={<ArrowBackIosIcon />}
        >Back
        </Button>
      </MuiThemeProvider></div>
    </div>
  );
}


{/*export default Variables2; */}