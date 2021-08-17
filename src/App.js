import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routes } from './config/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => <Route exact key={i} path={route.path} render={props => <route.component {...props} />} />)}
      </Switch>
    </Router>
  );
}
