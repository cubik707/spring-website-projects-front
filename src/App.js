import React from 'react';
import Header from './pages/Header/Header';
import Projects from './pages/Main/Projects/Projects';
import ProjectsListSection from './pages/Main/ProjectsList/ProjectsListSection';

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <ProjectsListSection />
    </div>
  );
}

export default App;
