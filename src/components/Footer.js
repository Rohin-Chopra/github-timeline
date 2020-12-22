import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useClasses = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    minHeight: "100px",
    width: "100%",
    marginBottom: "-50px",
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
  return (
    <Fragment>
      <Divider />
      <footer className={classes.root}>
        <p>
          <a
            href='https://github.com/Rohin1212'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon
              className={`${classes.footerIcon} ${classes.gitHubIcon}`}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/rohin-chopra-2b38791a0/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon
              className={`${classes.footerIcon} ${classes.linkedInIcon}`}
            />
          </a>
        </p>
        <p>
          © 2020 <span style={{ fontWeight: "bold" }}>Rohin Chopra.</span> All
          rights reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
