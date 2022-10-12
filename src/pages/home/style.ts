import { fade, makeStyles } from "@material-ui/core";

export const useClasses = makeStyles((theme) => ({
  heroWrapper: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: theme.spacing(2),
    },
    alignItems: "center",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  subtitleHeading: {
    textIndent: "1rem",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#e6e6e6",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "66%",
    },
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    margin: `${theme.spacing(0.5)}px auto`,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  heroBtn: {
    alignSelf: "center",
    marginTop: theme.spacing(1),
  },
}));
