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
    title: 'ProjectsSection',
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
        icon: (
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='arrow-up-right-from-square'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            style={{ width: '1em', height: '1em' }} // Optional: customize the size
          >
            <path
              fill='currentColor'
              d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z'
            ></path>
          </svg>
        ),
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
