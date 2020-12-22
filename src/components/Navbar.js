import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, IconButton, Typography } from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Navbar = () => {
  const theme = useTheme();
  console.log(theme.palette);
  const classes = useClasses(theme);
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar>
        <Link style={{ color: "#fff" }} to='/'>
          <Typography variant='h6'>RepoTracker</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
