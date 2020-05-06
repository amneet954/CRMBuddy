import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, NavBar, AllCases } from "./Components";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <br></br>
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/cases" component={AllCases} />
              <Route
                exact
                path="*"
                render={() => (
                  <h1>
                    PAGE DOESN'T EXIST. PLEASE START AT THE 'WELCOME' LINK!
                  </h1>
                )}
              />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
