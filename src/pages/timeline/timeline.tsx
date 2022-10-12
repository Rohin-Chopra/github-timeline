import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Alert from "@material-ui/lab/Alert";
import { Fragment, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import { IRepository } from "../../shared/types";
import { GithubTimeline } from "./../../components/github-timeline";
import { useClasses } from "./style";

const TimelineScreen = () => {
  const theme = useTheme();
  const classes = useClasses(theme);
  const { username } = useParams();
  const [repositories, setRepositories] = useState<IRepository[]>([]);
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
        const repos: IRepository[] = await response.json();
        const sortedRepos = repos.sort(
          (a, b) =>
            new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
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

export { TimelineScreen };
