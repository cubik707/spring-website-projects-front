const navbarMenuItems = [
  {
    title: 'Why Spring',
    dropdown: [
      { text: 'Overview', link: '#' },
      { text: 'Microservices', link: '#' },
      { text: 'Reactive', link: '#' },
      { text: 'Event Driven', link: '#' },
      { text: 'Cloud', link: '#' },
      { text: 'Web Application', link: '#' },
      { text: 'Serverless', link: '#' },
      { text: 'Batch', link: '#' },
    ],
  },
  {
    title: 'Learn',
    dropdown: [
      { text: 'Overview', link: '#' },
      { text: 'Quickstart', link: '#' },
      { text: 'Guides', link: '#' },
      { text: 'Blog', link: '#' },
    ],
  },
  {
    title: 'Projects',
    dropdown: [
      { text: 'Overview', link: '#' },
      { text: 'Spring Boot', link: '#' },
      { text: 'Spring Framework', link: '#' },
      { text: 'Spring Cloud', link: '#' },
      { text: 'Spring Cloud Data Flow', link: '#' },
      { text: 'Spring Data', link: '#' },
      { text: 'Spring Integration', link: '#' },
      { text: 'Spring Batch', link: '#' },
      { text: 'Spring Security', link: '#' },
      { text: 'Spring AI', link: '#' },
      { text: 'View all projects', link: '#', class: 'view-all-proj' },
      { text: 'DEVELOPMENT TOOLS', link: null, class: 'dev-tools' },
      { text: 'Spring Tools 4', link: '#' },
      {
        text: 'Spring Initializr',
        link: '#',
        icon: `
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-up-right-from-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
            ></path>
          </svg>
        `,
      },
    ],
  },
  {
    title: 'Academy',
    dropdown: [
      { text: 'Courses', link: '#' },
      { text: 'Get Certified', link: '#' },
    ],
  },
  {
    title: 'Solutions',
    dropdown: [
      { text: 'Overview', link: '#' },
      { text: 'Tanzu Spring', link: '#' },
      { text: 'Spring Consulting', link: '#' },
      { text: 'Spring Academy For Teams', link: '#' },
      { text: 'Security Advisories', link: '#' },
    ],
  },
  {
    title: 'Community',
    dropdown: [
      { text: 'Overview', link: '#' },
      { text: 'Events', link: '#' },
      { text: 'Authors', link: '#' },
    ],
  },
];

export default navbarMenuItems;
