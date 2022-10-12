import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClasses } from "./style";

const HomeScreen = () => {
  const theme = useTheme();
  const classes = useClasses(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/timeline/${username}`);
  };

  return (
    <Container className={classes.heroWrapper}>
      <div className={classes.heroContainer}>
        <Typography variant={!isMobile ? "h3" : "h4"} component="h1">
          Generate your Github Timeline
        </Typography>
        <Typography
          className={classes.subtitleHeading}
          variant="subtitle1"
          gutterBottom
        >
          Get a timeline of your GitHub repositories in a formatted timeline
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Github username"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Button
          className={classes.heroBtn}
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Generate
        </Button>
      </div>
    </Container>
  );
};

export { HomeScreen };
