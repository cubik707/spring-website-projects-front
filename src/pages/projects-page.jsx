import React from 'react';
import ProjectsSection from '../components/containers/projects/projects-section/Projects-section';
import ProjectsListSection from '../components/containers/projects/projects-list-section/Projects-list-section';
import Header from '../components/containers/header/Header';

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <ProjectsSection />
      <ProjectsListSection />
    </>
  );
};

export default ProjectsPage;
