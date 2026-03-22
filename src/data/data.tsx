import {ArrowDownTrayIcon, BuildingOffice2Icon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import portfolioCLRImage from '../images/portfolio/clr-intranet.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioSiteImage from '../images/portfolio/scottharvey-dev.jpg';
import typedPortfolioImage2 from '../images/portfolio/thumbnails/bootcamp-cars.v2.1.thumbnail.png';
import typedPortfolioImage3 from '../images/portfolio/thumbnails/bootcamp-currency-converter-and-monte-game.2.thumbnail.png';
import typedPortfolioImage4 from '../images/portfolio/thumbnails/bootcamp-current-weather.1.thumbnail.png';
import typedPortfolioImage1 from '../images/portfolio/thumbnails/bootcamp-to-do.thumbnail.png';
import profilepic0 from '../images/profilepic.nepal.1.jpg';
import profilepic1 from '../images/profilepic.png';
import heroImage from '../images/dc.capitol.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  TypedPortfolioItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Scott Harvey - Software Engineer',
  description:
    'Personal portfolio and resume of Scott Harvey, a software engineer based in ' +
    'Washington DC with 20+ years of experience across the full stack.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Scott Harvey.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Washington, DC based <strong className="text-stone-100">Software Engineer</strong> with over two decades
        of experience building web applications — from enterprise ColdFusion and SQL systems to modern full-stack
        JavaScript and mobile apps.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently building production software at a <strong className="text-stone-100">cannabis company</strong>. In my
        free time you can catch me <strong className="text-stone-100">cooking</strong> or strumming my{' '}
        <strong className="text-stone-100">guitar</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImage0Src: profilepic0,
  profileImage1Src: profilepic1,
  description: `Outside of work I value spending time with and traveling with my partner
  — I've been fortunate enough to visit about 30 countries on 6 continents.
  Professionally, I value a sense of ownership and working on projects that make a
  difference. I really enjoy the challenge of automating processes and love the reward
  of stakeholders telling me how much time and effort my work has saved them.`,
  aboutItems: [
    {label: 'Location', text: 'Washington, DC', Icon: MapIcon, href: 'https://maps.app.goo.gl/AC666547e7RVKBNx9'},
    {label: 'Nationality', text: 'USA', Icon: FlagIcon, href: 'https://maps.app.goo.gl/dxWKyQukyviLakEb6'},
    {label: 'Interests', text: 'Compassion, Music, Cooking', Icon: SparklesIcon, href: ''},
    {
      label: 'Employment',
      text: 'A Cannabis Company',
      Icon: BuildingOffice2Icon,
      href: 'https://www.holisticindustries.com',
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {name: 'HTML', level: 10},
      {name: 'CSS', level: 8},
      {name: 'JavaScript', level: 9},
      {name: 'jQuery', level: 9},
      {name: 'Vue / Nuxt', level: 8},
      {name: 'React', level: 7},
      {name: 'Next.js', level: 7},
      {name: 'TypeScript', level: 7},
      {name: 'Bootstrap', level: 8},
      {name: 'Tailwind CSS', level: 6},
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {name: 'ColdFusion', level: 10},
      {name: 'C# / .NET', level: 7},
      {name: 'Node.js', level: 7},
      {name: 'Express', level: 7},
      {name: 'PHP', level: 5},
      {name: 'Ruby on Rails', level: 5},
    ],
  },
  {
    name: 'Mobile development',
    skills: [{name: 'React Native', level: 6}],
  },
  {
    name: 'Databases',
    skills: [
      {name: 'MS SQL Server', level: 10},
      {name: 'Oracle', level: 8},
      {name: 'MongoDB', level: 8},
      {name: 'PostgreSQL', level: 6},
    ],
  },
  {
    name: 'CMS & static site generators',
    skills: [
      {name: 'HubSpot CMS', level: 8},
      {name: 'Jekyll / Liquid', level: 6},
    ],
  },
  {
    name: 'Developer tools',
    skills: [
      {name: 'Git / GitHub', level: 8},
      {name: 'Subversion', level: 9},
      {name: 'Jira', level: 9},
      {name: 'Bamboo', level: 7},
      {name: 'Splunk', level: 7},
      {name: 'Trello', level: 8},
      {name: 'Asana', level: 7},
    ],
  },
  {
    name: 'Spoken languages',
    skills: [{name: 'English', level: 10}],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    // TODO: replace porfolioImage1 with wireframe screenshot once created
    // Wireframe instructions: see handoff document
    title: 'Cannabis Industry — Mobile Fulfillment App',
    description:
      'React Native mobile application for an internal cannabis industry operations team. ' +
      'Supports inventory management, delivery logistics, and pack-and-pull fulfillment ' +
      'workflows. Contributed to an existing production codebase. ' +
      'UI shown as wireframes to protect employer confidentiality.',
    url: 'https://scottharvey.dev',
    image: porfolioImage1,
  },
  {
    title: 'scottharvey.dev',
    description:
      'This portfolio site — built with Next.js, TypeScript, and Tailwind CSS. ' +
      'Forked from the react-resume-template and fully customized with original ' +
      'content, structure, and styling. Deployed on AWS Amplify.',
    url: 'https://scottharvey.dev',
    image: portfolioSiteImage,
  },
  {
    title: 'CLR Intranet — Case Study',
    description:
      'Over 11 years at the Council for Logistics Research, built and maintained an ' +
      'enterprise intranet from the ground up serving CLR and US Air Force clients. ' +
      'Automated timekeeping, purchase requisitions, expense reporting, performance ' +
      'reviews, and training requests — dramatically reducing manual workload ' +
      'organization-wide. Stack: ColdFusion, JavaScript, HTML, CSS, MS SQL Server.',
    url: 'https://portfolio.scottharvey.dev',
    image: portfolioCLRImage,
  },
];

/**
 * Typed Portfolio section — drives portfolio.scottharvey.dev
 */
export const typedPortfolioItems: TypedPortfolioItem = {
  bootcampProjects: [
    {
      title: 'To-do List v2 (with Login)',
      overlayText:
        "The React app 'To-Do v1' with a RESTful Express API back-end. Express uses Mongoose to interface with MongoDB in order to save to-do items.",
      image: typedPortfolioImage1,
      demo: '',
      GitHub: 'https://github.com/dh4u/bootcamp-to-do/tree/v2',
      assignment: 'Build upon the previous to-do application by adding a login and writing the to-do items to MongoDB.',
      solution:
        "Added an Express back-end to 'To-Do v1'. Express serves as a RESTful API and uses Mongoose to interface with MongoDB in order to save to-do items.",
      features: [
        {feature: 'Provides / uses internal RESTful API'},
        {feature: 'Database storage'},
        {feature: 'Authentication (local storage)'},
        {feature: 'Session Mgmt (local storage)'},
      ],
      technology: 'MERN (MongoDB (Mongoose), Express, React, NodeJS), React Bootstrap, and React Simple Storage',
    },
    {
      title: 'Cars v2',
      overlayText:
        'A React app with a RESTful Express API for a simplified version of an inventory tracker for an automobile dealership.',
      image: typedPortfolioImage2,
      demo: '',
      GitHub: 'https://github.com/dh4u/bootcamp-cars',
      assignment: 'Create a full stack web application that uses a MongoDB collection to store cars in an inventory.',
      solution:
        'Built an Express RESTful API as the back-end for a React front-end. The API uses Mongoose to interface with MongoDB for storing car inventory.',
      features: [
        {feature: 'Provides / uses internal RESTful API'},
        {feature: 'Database storage'},
        {feature: 'List / Drilldown interface'},
        {feature: 'Bulk Editing'},
      ],
      technology: 'MERN (MongoDB (Mongoose), Express, React, NodeJS) and React Bootstrap',
    },
    {
      title: 'Currency Converter / Three Card Monte',
      overlayText:
        'A React app that allows the user to choose between a currency converter and a Three-card Monte game.',
      image: typedPortfolioImage3,
      demo: '',
      GitHub: 'https://github.com/dh4u/bootcamp-currency-converter-and-monte-game',
      assignment:
        'Create an app that allows the user to choose between a currency converter and a Three-card Monte game.',
      solution: 'Used create-react-app to bootstrap a React app. Exchange rates are fetched from apilayer.com.',
      features: [
        {feature: 'Uses RESTful API'},
        {feature: 'Custom feedback for winning / losing streaks'},
        {feature: 'Bootstrap-React Animation'},
        {feature: 'Routing'},
        {feature: 'State Management'},
        {feature: 'Events'},
      ],
      technology: 'React and React Bootstrap',
    },
    {
      title: 'Current Weather',
      overlayText: "A React app that displays the current weather in the city of the user's choice.",
      image: typedPortfolioImage4,
      demo: 'https://dh4u-bootcamp-current-weather.herokuapp.com',
      GitHub: 'https://github.com/dh4u/bootcamp-current-weather',
      assignment: 'Create a React app that will display the weather in a city of the user\u2019s choice.',
      solution: 'Used create-react-app to bootstrap a React app that displays weather from OpenWeatherMap API.',
      features: [
        {feature: 'Uses APIs to autosuggest cities and get weather'},
        {feature: 'State Management'},
        {feature: 'Events'},
      ],
      technology: 'React and React Bootstrap',
    },
  ],
  paidProjects: [],
};

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2020',
    location: 'HyperionDev',
    url: 'https://www.hyperiondev.com/',
    title: 'Full Stack Web Developer Certificate',
    content: (
      <p>
        Full-stack development using the <strong>MERN</strong> stack — <strong>MongoDB, Express, Node.js,</strong> and{' '}
        <strong>React</strong>. Covered HTML, CSS, Bootstrap 4, modern JavaScript (ES6+), and RESTful API development.
      </p>
    ),
  },
  {
    date: 'July 2010',
    location: 'Adobe Inc.',
    url: '',
    title: 'Adobe Certified Expert — ColdFusion',
    content: (
      <p>
        Professional certification validating expert-level knowledge of Adobe ColdFusion for enterprise web application
        development.
      </p>
    ),
  },
  {
    date: 'March 2003',
    location: 'Project Management Institute',
    url: '',
    title: 'Hands-on IT Project Management',
    content: (
      <p>Practical IT project management training covering planning, execution, and delivery of technology projects.</p>
    ),
  },
  {
    date: 'Summer 2007',
    location: 'Corcoran College of Art and Design',
    url: '',
    title: 'Introduction to Graphic Design',
    content: <p>Foundational graphic design coursework informing UI sensibility and visual communication.</p>,
  },
  {
    date: '1992\u20131995',
    location: 'Carnegie Mellon University',
    url: '',
    title: 'Mellon College of Sciences',
    content: <p>Attended the Mellon College of Sciences at Carnegie Mellon University.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - Present',
    location: 'A Cannabis Company',
    url: 'https://www.holisticindustries.com',
    title: 'Senior Software Engineer',
    content: (
      <p>
        C# | Vue | TypeScript | React Native | MS SQL Server
        <br />
        Full-stack software engineer delivering production web and mobile applications. Building and maintaining
        internal tools including a React Native mobile app supporting inventory management, delivery logistics, and
        pack-and-pull fulfillment workflows. Front-end development with Vue and TypeScript, back-end API development
        with C# and .NET, and database work with SQL Server.
      </p>
    ),
  },
  {
    date: '2020 - 2021',
    location: 'Ethicode',
    url: 'https://ethicode.org/',
    title: 'Software Engineer',
    content: (
      <p>
        NextJS | HTML | CSS <br />
        <a className="text-orange-400 hover:text-orange-300" href="https://foodprintcalculator.com/" rel="noopener noreferrer" target="_blank">FOOD·E</a> - Full-stack development with NextJS and MongoDB on a project to calculate the environmental impact of
        your meals.
        <br />
        <a className="text-orange-400 hover:text-orange-300" href="https://www.ethicode.org" rel="noopener noreferrer" target="_blank">Ethicode website</a> - Development and maintenance.
      </p>
    ),
  },
  {
    date: '2020 - 2021',
    location: 'Goodbeast (Autonomy Coop)',
    url: 'https://goodbeast.com/',
    title: 'Web Developer',
    content: (
      <p>
        VueJS | HTML | CSS <br />
        <a className="text-orange-400 hover:text-orange-300" href="https://www.crankyuncle.com" rel="noopener noreferrer" target="_blank">Cranky Uncle mobile app</a> - Mobile development in VueJS, HTML, and CSS <br />
        <a className="text-orange-400 hover:text-orange-300" href="https://rogueorigin.com/" rel="noopener noreferrer" target="_blank">Rogue Origin</a> - Developing and maintaining responsive front-end web pages and marketing emails <br />
        <a className="text-orange-400 hover:text-orange-300" href="https://www.socialsolutions.biz/" rel="noopener noreferrer" target="_blank">Social Solutions</a> - Website development and maintenance.
      </p>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'Agency Q',
    url: 'https://www.agencyq.com/',
    title: 'Freelance Web Developer',
    content: (
      <p>
        JavaScript | HTML | CSS | HubSpot CMS
        <br />
        <a className="text-orange-400 hover:text-orange-300" href="https://www.agencyq.com/" rel="noopener noreferrer" target="_blank">agencyQ.com</a> - Developing responsive JavaScript, HTML, and CSS modules in HubSpot CMS. <br />
        Developed and implemented HTML email templates in Salesforce Pardot.
      </p>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'Nobel Technologies, Inc',
    url: 'https://www.nobletechinc.com/',
    title: 'Database Developer',
    content: (
      <p>
        MS SQL Server
        <br />
        <a className="text-orange-400 hover:text-orange-300" href="https://www.workersrights.org/" rel="noopener noreferrer" target="_blank">Workers Rights Consortium</a> - Performing data management tasks using MS SQL, including database backups, data
        loads, data validation, and report writing. Assisting with database design and modeling, stored procedure
        writing, and interface support.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Shoot me a line.',
  items: [
    {
      type: ContactType.Email,
      text: 'scott.harvey@outlook.com',
      href: 'mailto:scott.harvey@outlook.com',
    },
    {
      type: ContactType.Location,
      text: 'Washington, DC USA',
      href: 'https://www.google.com/maps/place/Washington,+DC/@38.8937545,-77.014576,12z',
    },
    {
      type: ContactType.Github,
      text: 'dh4u',
      href: 'https://github.com/dh4u',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [{label: 'Github', Icon: GithubIcon, href: 'https://github.com/dh4u'}];
