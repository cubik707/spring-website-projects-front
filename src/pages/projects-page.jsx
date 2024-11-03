import React from 'react';
import ProjectsSection from '../components/containers/projects/projects-section/projects-section';
import ProjectsListSection from '../components/containers/projects/projects-list-section/projects-list-section';
import Header from '../components/containers/header/header';

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
