import springBoot from '../../../assets/spring-boot.svg';
import springFramework from '../../../assets/spring-framework.svg';
import springData from '../../../assets/spring-data.svg';
import springCloud from '../../../assets/spring-cloud.svg';
import springDataFlow from '../../../assets/spring-data-flow.svg';
import springSecurity from '../../../assets/spring-security.svg';

const projectsData = [
  {
    title: 'Spring Boot',
    description:
      'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
    image: springBoot,
    link: '#',
  },
  {
    title: 'Spring Framework',
    description:
      'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
    image: springFramework,
    link: '#',
  },
  {
    title: 'Spring Data',
    description:
      'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
    image: springData,
    link: '#',
  },
  {
    title: 'Spring Cloud',
    description:
      'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
    image: springCloud,
    link: '#',
  },
  {
    title: 'Spring Cloud Data Flow',
    description:
      'Provides an orchestration service for composable data microservice applications on modern runtimes.',
    image: springDataFlow,
    link: '#',
  },
  {
    title: 'Spring Security',
    description:
      'Protects your application with comprehensive and extensible authentication and authorization support.',
    image: springSecurity,
    link: '#',
  },
];

export default projectsData;
