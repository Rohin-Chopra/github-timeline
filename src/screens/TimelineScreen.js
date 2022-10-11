import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Alert from "@material-ui/lab/Alert";
import React, { Fragment, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GithubTimeline from "../components/GithubTimeline";
const useClasses = makeStyles((theme) => ({
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(1),
  },
  btn: {
    alignSelf: "center",
  },
  avatar: {
    margin: "0 auto 1rem auto",
    height: "100px",
    width: "100px",
  },
  loader: {
    margin: "0 auto",
  },
}));

const TimelineScreen = ({
  match: {
    params: { username },
  },
}) => {
  const theme = useTheme();
  const classes = useClasses(theme);
  const [repositories, setRepositories] = useState([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://intense-spire-37674.herokuapp.com/https://api.github.com/users/${username}/repos`
        );
        const repos = await response.json();
        const sortedRepos = repos.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setIsLoading(false);
        setRepositories(sortedRepos);
      } catch (error) {}
    })();
  }, [username]);
  return (
    <Container className={classes.timelineContainer}>
      {isLoading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <Fragment>
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h4"
            component="h1"
          >
            {username}'s Timeline
          </Typography>
          <a
            target="blank"
            rel="noopener noreferrer"
            href={repositories[0]?.owner?.html_url}
          >
            <Avatar
              className={classes.avatar}
              alt={username}
              src={repositories[0]?.owner?.avatar_url}
            />
          </a>
          <CopyToClipboard
            onCopy={() => setOpen(true)}
            text={window.location.href}
          >
            <Button className={classes.btn} variant="outlined">
              <FileCopyIcon /> Copy link
            </Button>
          </CopyToClipboard>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Copied to clipboard
            </Alert>
          </Snackbar>
          <GithubTimeline repositories={repositories} />
        </Fragment>
      )}
    </Container>
  );
};

export default TimelineScreen;
