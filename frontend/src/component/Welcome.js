import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import image from '../images/s.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
    minHeight: "93vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "dodgerblue",
    textShadow: "2px 3px 5px rgba(0, 0, 0, 0.8)"
  },
  welcomeBackground: {
    backgroundImage: `url(${image})`
  },
  errorBackground: {
    backgroundImage: `url(${image})` // Use the same image for consistency in example
  }
}));

export const Welcome = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={`${classes.root} ${classes.welcomeBackground}`}
    >
      <Typography variant="h2">Welcome to Hiring Techtics</Typography>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={`${classes.root} ${classes.errorBackground}`}
    >
      <Typography variant="h2">Error 404</Typography>
    </Grid>
  );
};

export default Welcome;
