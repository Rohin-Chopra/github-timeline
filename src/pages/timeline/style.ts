import { makeStyles } from "@material-ui/core/styles";

export const useClasses = makeStyles((theme) => ({
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
