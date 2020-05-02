import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ScheduleInterviews from "../pages/ScheduleInterviews";
import SearchInterviews from "../pages/SearchInterviews";
import FilterCandidates from "../pages/FilterCandidates";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ScheduleInterviews} />
          <Route exact path="/search-interviews" component={SearchInterviews} />
          <Route exact path="/filter-candidates" component={FilterCandidates} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
