export const DEFAULT_LINK = '#';

const navbarMenuItems = [
  {
    title: 'Why Spring',
    dropdown: [
      { text: 'Overview', link: 'https://spring.io/why-spring' }, // Example of a specific link
      { text: 'Microservices' },
      { text: 'Reactive' },
      { text: 'Event Driven' },
      { text: 'Cloud' },
      { text: 'Web Application' },
      { text: 'Serverless' },
      { text: 'Batch' },
    ],
  },
  {
    title: 'Learn',
    dropdown: [
      { text: 'Overview' },
      { text: 'Quickstart' },
      { text: 'Guides' },
      { text: 'Blog' },
    ],
  },
  {
    title: 'Projects',
    dropdown: [
      { text: 'Overview' },
      { text: 'Spring Boot' },
      { text: 'Spring Framework' },
      { text: 'Spring Cloud' },
      { text: 'Spring Cloud Data Flow' },
      { text: 'Spring Data' },
      { text: 'Spring Integration' },
      { text: 'Spring Batch' },
      { text: 'Spring Security' },
      { text: 'Spring AI' },
      { text: 'View all projects', class: 'viewAllProj' },
      { text: 'DEVELOPMENT TOOLS', link: null, class: 'devTools' },
      { text: 'Spring Tools 4' },
      {
        text: 'Spring Initializr',
        icon: `<!-- SVG Icon -->`,
      },
    ],
  },
  {
    title: 'Academy',
    dropdown: [{ text: 'Courses' }, { text: 'Get Certified' }],
  },
  {
    title: 'Solutions',
    dropdown: [
      { text: 'Overview' },
      { text: 'Tanzu Spring' },
      { text: 'Spring Consulting' },
      { text: 'Spring Academy For Teams' },
      { text: 'Security Advisories' },
    ],
  },
  {
    title: 'Community',
    dropdown: [{ text: 'Overview' }, { text: 'Events' }, { text: 'Authors' }],
  },
];

export default navbarMenuItems;
