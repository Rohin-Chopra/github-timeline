import { makeStyles } from "@material-ui/core/styles";

export const useClasses = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.palette.primary.dark,
    height: "100px",
    width: "100%",
    paddingTop: "1rem",
    textAlign: "center",
    color: "#fff",
  },
  footerIcon: {
    height: "30px",
    width: "30px",
    color: "#fff",
    marginRight: "0.5rem",
  },
  linkedInIcon: {
    "&:hover": {
      color: "#0077B5",
    },
  },
  gitHubIcon: {
    "&:hover": {
      color: "#040204",
    },
  },
}));
