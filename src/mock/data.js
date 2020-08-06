import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jason Chhay | Personal Website', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Jason Chhay - Personal Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi there, I'm `,
  name: 'Jason Chhay',
  subtitle: 'I like to code.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

export const experiencesData = [
  {
    id: nanoid(),
    company: 'Penn State THON',
    positions: [
      {
        title: 'UX Lead Developer ',
        location: 'University Park, PA',
        start: 'April 2019',
        end: 'Present',
        description: [
          'Collaborating with 24 volunteers to build Django web applications utilized by thousands of students to streamline philanthropy efforts for childhood cancer.',
          'Managing 2 other developers in UX design and front-end development and for internal web tools through HTML, CSS, jQuery, Vue.js, and Bootstrap.',
          'Migrated Dockerized web stack to utilize webpack loader to deploy Javascript components for easier development and a more reactive user experience',
          'Designed and led development for intranet dashboard to provide more accessible information for upcoming deadlines and events for volunteers.',
        ],
      },
    ],
  },
  {
    id: nanoid(),
    company: 'CiteSeerX',
    positions: [
      {
        title: 'Software Developer',
        location: 'University Park, PA',
        start: 'May 2018',
        end: 'Present',
        description: [
          'Leading project management for front-end development amongst graduate and undergraduate students for Elastic search engine built with Django and Vue.js.',
          'Full-stack web developer for open-research search engine with Django and Elasticsearch for publications relating to COVID-19 to aid global research effort.',
          'Developed and deployed informative website on CiteSeerX search engine through Django web framework, utilizing Python, HTML/CSS, and SQL.',
          'Established online internal documentation wiki to ensure that contributions and resources can be easily tracked, and existing information can be maintained.',
          'Provide systems support and assistance on Linux servers for CiteSeerX academic search engine.',
        ],
      },
    ],
  },
  {
    id: nanoid(),
    company: 'CastPak',
    positions: [
      {
        title: 'Software Lead',
        location: 'State College, PA',
        start: 'Dec 2018',
        end: 'Mar 2020',
        description: [
          'Led software program management for 3 student entrepreneurs for a portable and user-friendly proprietary live streaming device for videographers.',
          'Created user-experience and application flow for communication between Bluetooth live streaming device and mobile phones.',
          'Designed and developed Python REST API to allow video encoders to be configured for live streaming over wireless communication.',
        ],
      },
    ],
  },
  {
    id: nanoid(),
    company: 'CommScope',
    positions: [
      {
        title: 'Software Development Intern',
        location: 'Horsham, PA',
        start: 'May 2019',
        end: 'Aug 2019',
        description: [
          'Collaborated with interns, product owners, scrum masters, and senior software engineers to develop customer technical solutions through Agile development.',
          'Built Java Android app that dynamically load custom user interfaces in smart TV set-top boxes for customer demos.',
          'Configured Bamboo servers and wrote JUnit test cases to provide continuous integration for projects.',
          'Improved image storage efficiency through Python script that prevents extraneous files from being packaged onto a digital media catalog.',
        ],
      },
    ],
  },
  {
    id: nanoid(),
    company: 'Raw Aesthetic Movements',
    positions: [
      {
        title: 'THON Chair President',
        location: 'University Park, PA',
        start: 'Apr 2018',
        end: 'Apr 2019',
        description: [
          'Organized and managed fundraisers, raising over $4,700 towards childhood cancer research and treatment.',
          'Planned and managed auditions, performances, and practice sessions for hip-hop dance organization of 40 members.',
          'Coordinated major hip-hop dance competition with over 200 participants across the Northeast United States.',
        ],
      },
    ],
  },
];
// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// OTHER PROJECTS DATA
export const otherProjectsData = [
  {
    id: nanoid(),
    title: '',
    info: '',
    url: '',
    repo: '',
  },
];
// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out to me!',
  btn: 'Email',
  email: 'jasonchhay@gmail.com',
  linkedinBtn: 'LinkedIn',
  linkedin: 'https://linkedin.com/in/jasonchhay',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
