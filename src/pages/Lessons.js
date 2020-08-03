import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, 
    Box,
    Collapse, 
    Container, 
    IconButton,
    Button,
    Paper,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
    makeStyles } from '@material-ui/core/';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        backgroundColor: '#73E08B',
        height: '1.5em',
        padding: theme.spacing(1.5),
        textAlign: 'center',
    },
    header: {
        marginBottom: '2em',
    },
    button: {
        position: 'relative',
        backgroundColor: '#FFB5EA',
        textAlign: 'center',
        fontFamily: 'Poppins',
        width: '50%',
        height: '3.5em',
        '&:hover': {
            backgroundColor: '#fff',
        }
    },

    navButton: {
        position: 'fixed',
        bottom: 50,
        left: 50,
        textAlign: 'left',
        backgroundColor: '#FFB5EA',
        fontFamily: 'Poppins',
        '&:hover': {
            backgroundColor: '#fff',
        }
    }
}));

export default function Lessons() {
    const classes = useStyles();
    const [openBeginner, setOpenBeginner] = React.useState(false);
    const [openIntermediate, setOpenIntermediate] = React.useState(false);
    const [openAdvanced, setOpenAdvanced] = React.useState(false);

    return (
        <div className="Lessons">
            <Container className={classes.header}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <Paper className={classes.title}>Technology: Lessons</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" href="/tech/lessons" className={classes.button}>
                            Lessons
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" href="/leaders" className={classes.button}>
                            STEM Leaders
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <IconButton size="small" onClick={() => setOpenBeginner(!openBeginner)}>
                                        {openBeginner ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    Beginner
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Collapse in={openBeginner} timeout="auto" unmountOnExit>
                                        <Box margin={1}>
                                            <Table size="small" aria-label="purchases">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/variables0">Variables</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Data Types</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/variables0">Operators</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/variables0">Basic Data Structures</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/conditionals0">Conditionals</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                        <Link to="/">Loops</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Functions</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <IconButton aria-label="expand row" size="small" onClick={() => setOpenIntermediate(!openIntermediate)}>
                                        {openIntermediate ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    Intermediate
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Collapse in={openIntermediate} timeout="auto" unmountOnExit>
                                        <Box margin={1}>
                                            <Table size="small" aria-label="purchases">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/variables0">Classes / Objects</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/variables0">Modules</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Intermediate Data Structures</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Algorithms</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Databases</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Automation</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Testing</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <IconButton aria-label="expand row" size="small" onClick={() => setOpenAdvanced(!openAdvanced)}>
                                        {openAdvanced ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    Advanced
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Collapse in={openAdvanced} timeout="auto" unmountOnExit>
                                        <Box margin={1}>
                                            <Table size="small" aria-label="purchases">
                                                <TableBody>
                                                <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/variables0">Advanced Data Structures</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/variables0">Recursion</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Operating Systems</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Cryptography</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Machine Learning / Artificial Intelligence</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Data Science</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Information Theory</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Link to="/">Distributed Systems</Link>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid item xs={6}>
                    <Button variant="contained" href="/" className={classes.navButton} startIcon={<ArrowBackIosIcon />}>
                        Back
                    </Button>
                </Grid>
            </Container>
        </div>
    );
}
