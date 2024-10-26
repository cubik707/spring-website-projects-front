import React from 'react';
import './App.css';
import { Header } from './pages/Header/Header';
import { Projects } from './pages/Main/Projects';
import { ProjectsList } from './pages/Main/ProjectsList';

function App() {
  return (
    <div className='App'>
      <Header />
      <Projects />
      <ProjectsList />
    </div>
  );
}

export default App;
