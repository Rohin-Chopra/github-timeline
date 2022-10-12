import { makeStyles } from "@material-ui/core/styles";

export const useClasses = makeStyles((theme) => ({
  timelinePaper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    maxWidth: "22rem",
  },
  button: {
    margin: `${theme.spacing(1)}px ${theme.spacing(0.5)}px`,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
    width: "4px",
  },
  oppositeContent: {
    [theme.breakpoints.down("sm")]: {
      flex: "0.3",
    },
    padding: "6px 8px 6px 0px",
  },
  timelineContent: {
    [theme.breakpoints.down("sm")]: {
      flex: "0.7",
    },
  },
  timelineDot: {
    marginLeft: "-3px",
  },
}));
