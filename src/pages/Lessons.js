import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, 
    Box,
    Collapse, 
    Container, 
    IconButton,
    List, 
    ListItem, 
    ListItemText, 
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles } from '@material-ui/core/';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        backgroundColor: '#73E08B',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Lessons(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    return (
        <div className="Lessons">
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <Paper className={classes.title}>Technology</Paper>
                    </Grid>
                    <Grid item xs={12}>
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
                <List>
                    <ListItem button>
                        <ListItemText>Sample</ListItemText>
                    </ListItem>
                    <Collapse>
                        <List>
                            <ListItem button>
                            <ListItemText>Sample</ListItemText>
                            </ListItem> 
                        </List>
                    </Collapse> 
                </List>

                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className={classes.root}>
                                <TableCell>
                                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                Name
                                </TableCell>
                                <TableCell align="right">L</TableCell>
                                <TableCell align="right">M</TableCell>
                                <TableCell align="right">A</TableCell>
                                <TableCell align="right">O</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <Box margin={1}>
                                            History
                                            <Table size="small" aria-label="purchases">
                                                <TableHead>
                                                <TableRow>
                                                    <TableCell>Date</TableCell>
                                                    <TableCell>Customer</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                    <TableCell align="right">Total price ($)</TableCell>
                                                </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            Yo
                                                        </TableCell>
                                                        <TableCell>Hey</TableCell>
                                                        <TableCell align="right">Row</TableCell>
                                                        <TableCell align="right">
                                                            Nice
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

            </Container>
        </div>
    );
}
