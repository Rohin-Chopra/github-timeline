import { useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import { IRepository } from "../../shared/types";
import parseDate from "../../utils/parseDate";
import { useClasses } from "./style";

type Props = {
  repository: IRepository;
};

const GithubTimelineItem = ({ repository }: Props) => {
  const theme = useTheme();
  const classes = useClasses(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent}>
        <Typography>{parseDate(repository.created_at)}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator className={classes.secondaryTail}>
        <TimelineDot className={classes.timelineDot} />
      </TimelineSeparator>
      <TimelineContent className={classes.timelineContent}>
        <Paper className={classes.timelinePaper}>
          <Typography
            style={{ wordBreak: "break-all" }}
            variant={isMobile ? "button" : "h6"}
            component="h6"
          >
            {repository.name}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {repository.description}
          </Typography>
          {repository.language && <Chip label={repository.language} />} <br />
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            target="blank"
            rel="noopener noreferrer"
            href={repository.html_url}
          >
            View Source
          </Button>
          {repository.homepage && (
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              target="blank"
              rel="noopener noreferrer"
              href={repository.homepage}
            >
              View HomePage
            </Button>
          )}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export { GithubTimelineItem };
