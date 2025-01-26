import './App.css';
import React from "react";
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import EarlyEducation from './pages/EarlyEducation';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
        <Profile />
        <Skills/>
        <WorkExperience/>
        <Projects/>
        <EarlyEducation />
    </React.Fragment>
  );
}

export default App;
