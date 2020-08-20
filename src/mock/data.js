import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jason Chhay | Personal Website', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi there, my name is `,
  name: 'Jason Chhay',
  subtitle: 'I like to code',
  cta: 'Contact me',
  email: 'jasonchhay@gmail.com',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a senior at Penn State, University Park studying Computer Science with a minor in Mathematics and Engineering Leadership Development through the Schreyer Honors College.",
  paragraphTwo:
    "As far as I can remember, I've been extremely passionate about technology. I wanted to do whatever it was possible to learn and grow. I taught myself Java in my freshman year of high school, only to later independently develop an Android project my senior year. That passion has carried into my college career, in which I've used my technical experience to help contribute to research labs, start-up companies, and student organizations.",
  paragraphThree:
    "I'm a full stack developer with a keen eye for aesthetic designs and strong user experiences. I'm not afraid to wear different hats when needed or learn things on the fly. ",
  resume: 'https://drive.google.com/file/d/1hpwQKjf4QNTTOkaEcq03ESrNU9L34Eol/view', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = [
  {
    category: 'Languages',
    icon: 'code',
    items: ['JavaScript', 'Python', 'HTML/CSS', 'Java', 'C', 'Kotlin', 'MATLAB'],
  },
  {
    category: 'Frameworks',
    icon: 'laptop-code',
    items: [
      'Django',
      'React',
      'Vue.js',
      'Node.js',
      'Express',
      'React Native',
      'Android',
      'Bootstrap',
    ],
  },
  {
    category: 'Tools',
    icon: 'terminal',
    items: ['Linux/Unix', 'Elasticsearch', 'MySQL', 'Git', 'Apache', 'Heroku'],
  },
  {
    category: 'Programs',
    icon: 'window-restore',
    items: [
      'Figma',
      'Adobe XD',
      'Microsoft Office Suite',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Microsoft Visual Studio',
    ],
  },
];

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
          'Leading project management for front-end development amongst graduate and undergraduate students for Elastic search engine built with Python and Vue.js.',
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
    img: 'project_covidseer.png',
    title: 'COVIDSeer',
    info:
      'Search engine built off the CORD-19 dataset from Allen AI, allowing people to query for academic publications on COVID-19 to help with the global medical research effort.',
    info2: 'Django, Elasticsearch, Python, Vue.js, Apache',
    url: 'https://covidseer.ist.psu.edu',
    repo: 'https://github.com/jasonchhay/CovidSeer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_qualitymix.png',
    title: 'QualityMix for Spotify',
    info:
      "Web application based off of Spotify's Recommendation API that allows users to create custom playlists based on their favorite artists, genres, songs, and specific song qualities like BPM and moodiness.",
    info2: 'React, Express, Node.js, Spotify Web API',
    url: 'https://spotify-quality-mix.herokuapp.com/',
    repo: 'https://github.com/jasonchhay/SpotifyQualityMix', // if no repo, the button will not show up
  },
];

// OTHER PROJECTS DATA
export const otherProjectsData = [
  {
    id: nanoid(),
    title: 'Audio Gender Analyzer',
    info:
      ' Analyzes an audio file of human speech, identifies gender of speaker through MATLAB spectral analysis and Naive Bayes implementation through Python.',
    info2: 'Python, MATLAB',
    url: '',
    repo: 'https://github.com/jasonchhay/AudioGenderAnalyzer',
  },
  {
    id: nanoid(),
    title: 'QuickMaths',
    info:
      'Amazon Echo game, as part of the Penn State IT challenge for HackPSU 2018. This project won 3rd place within its challenge category.',
    info2: 'Python',
    url: '',
    repo: 'https://github.com/jasonchhay/QuickMaths',
  },
  {
    id: nanoid(),
    title: 'Forbidden Word',
    info:
      ' A Discord chat bot that plays a forbidden word game. When the game is active, players must make normal conversation but avoid saying 1000 secret random words or they will be penalized.',
    info2: 'Python',
    url: '',
    repo: 'https://github.com/jasonchhay/ForbiddenWord',
  },
];
// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out to me!',
  btn: 'Email',
  email: 'jasonchhay@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/jasonchhay',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jasonchhay',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
