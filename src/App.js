import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Slider from "./pages/Slider";
import Home from "./pages/Home";
import ColorGenerator from "./pages/ColorGenerator";
import GloceryBud from "./pages/GloceryBud";
import Navbar from "./pages/Navbar";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/testimony-slider">
          <Slider />
        </Route>

        <Route path="/color-generator">
          <ColorGenerator />
        </Route>

        <Route path="/glocery-bud">
          <GloceryBud />
        </Route>

        <Route path="/navbar">
          <Navbar />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
