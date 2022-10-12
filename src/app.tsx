import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { HomeScreen } from "./pages/home";
import { TimelineScreen } from "./pages/timeline";

const App = () => {
  const theme = createTheme({
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
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/timeline/:username" element={<TimelineScreen />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export { App };
