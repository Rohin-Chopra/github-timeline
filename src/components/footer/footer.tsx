import { makeStyles, useTheme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useClasses = makeStyles((theme) => ({
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

const Footer = () => {
  const theme = useTheme();
  const classes = useClasses(theme);
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <p>
        <a
          href="https://github.com/Rohin-Chopra"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            className={`${classes.footerIcon} ${classes.gitHubIcon}`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rohin-chopra-2b38791a0/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            className={`${classes.footerIcon} ${classes.linkedInIcon}`}
          />
        </a>
      </p>
      <p>
        © {CURRENT_YEAR}{" "}
        <span style={{ fontWeight: "bold" }}>Rohin Chopra.</span> All rights
        reserved
      </p>
    </footer>
  );
};

export { Footer };
