import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ScheduleInterviews from "../pages/ScheduleInterviews";
import SearchInterviews from "../pages/SearchInterviews";
import FilterCandidates from "../pages/FilterCandidates";
import ScheduleCandidates from "../pages/ScheduleCandidates";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ScheduleInterviews} />
          <Route exact path="/search-interviews" component={SearchInterviews} />
          <Route exact path="/filter-candidates" component={FilterCandidates} />
          <Route
            exact
            path="/schedule-candidates"
            component={ScheduleCandidates}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
