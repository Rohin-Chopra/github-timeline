import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import parseDate from "../utils/parseDate";
import { useMediaQuery } from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
  timelinePaper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    maxWidth: "22rem",
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "9rem",
    // },
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

const GithubTimeline = ({ repositories }) => {
  const theme = useTheme();
  const classes = useClasses(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Timeline>
      {repositories.map((repo) => (
        <TimelineItem key={repo.id}>
          <TimelineOppositeContent className={classes.oppositeContent}>
            <Typography>{parseDate(repo.created_at)}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.secondaryTail}>
            <TimelineDot className={classes.timelineDot} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Paper className={classes.timelinePaper}>
              <Typography
                style={{ wordBreak: "break-all" }}
                variant={isMobile ? "button" : "h6"}
                component='h6'
              >
                {repo.name}
              </Typography>
              <Typography varaint='subtitle1' component='p'>
                {repo.description}
              </Typography>
              {repo.language && (
                <Chip className={classes.chip} label={repo.language} />
              )}{" "}
              <br />
              <Button
                variant='outlined'
                color='primary'
                className={classes.button}
                target='blank'
                rel='noopener noreferrer'
                href={repo.html_url}
              >
                View Source
              </Button>
              {repo.homepage && (
                <Button
                  variant='outlined'
                  color='secondary'
                  className={classes.button}
                  target='blank'
                  rel='noopener noreferrer'
                  href={repo.homepage}
                >
                  View HomePage
                </Button>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default GithubTimeline;
