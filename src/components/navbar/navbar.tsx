import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Link } from "react-router-dom";

const useClasses = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const classes = useClasses(theme);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Link style={{ color: "#fff" }} to="/">
          <Typography variant="h6">RepoTracker</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
