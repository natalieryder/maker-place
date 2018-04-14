import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Pages used in routes
import HomePage from './components/Home/HomePage.js';
import LessonsPage from './components/Lessons/LessonsPage.js';
import LessonPage from './components/Lesson/LessonPage';
import MembershipsPage from './components/Memberships/MembershipsPage';
import Nav from './components/Nav/';
import './App.css';

// This is where you define top level routes in the app mapping some url to a given page component
// to add a new page/route:
// 1) import page component
// 2) add <Route> jsx tag with path and component
//
// adding route with custom params:
// <Route exact path="/classes" render={(props)=> (
//   <LessonsPage {...props} classNames={CLASS_NAMES} />
// )}/>

const App = () => (
  <div>
    <Router>
      <div>
        <Nav/ >
          <div>

            <Route exact path="/" component={HomePage}/>
            <Route exact path="/lessons" component={LessonsPage} />
            <Route path="/lessons/:title" component={LessonPage} />
            <Route path="/memberships" component={MembershipsPage} />

          </div>
        </div>
    </Router>
  </div>
);

export default App;
