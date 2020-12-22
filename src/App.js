import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import TimelineScreen from "./screens/TimelineScreen";
import "./App.css";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        light: "#fbefbf",
        main: "#478990",
        dark: "#322835",
      },
      secondary: {
        light: "#fbefbf",
        main: "#65220e",
        dark: "#676665",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <main>
          <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/timeline/:username' component={TimelineScreen} />
          </Switch>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
