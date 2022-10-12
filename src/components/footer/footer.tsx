import { useTheme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useClasses } from "./style";

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
