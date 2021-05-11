import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AddJob from './components/AddJob'
import JobState from './State/JobState'
function App() {
  return (
   <JobState>
        <Router>
          <Fragment>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/add-job" component={AddJob} />
            </Switch>
          </Fragment>
        </Router>
     </JobState>
  );
}

export default App;
