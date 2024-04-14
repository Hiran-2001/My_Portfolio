const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hiran Raj',
  role: 'Software Engineer',
  description:
    'I am an Engineer specializing in software development with a particular focus on Node.js and JavaScript. With a passion for creating efficient and scalable solutions, my technical expertise extends to the realm of REST API development. I am committed to a journey of perpetual learning and improvement. In the dynamic field of software development, I embrace the latest technologies and methodologies, ensuring that my skills are not just current but at the forefront of innovation. This dedication to continuous learning is pivotal in my quest to be the best version of myself',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/hiran-raj-24879a215/',
    github: 'https://github.com/Hiran-2001',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'NodeJS',
  'JavaScript',
  'TypeScript',
  'ExpressJS',
  'NestJS',
  'AWS',
  'ReactJS',
  'Redux',
  'ElectronJS',
  'SQL',
  'NoSQL',
  'Socket.io',
  'PostgreSQL',
  'MongoDB',
  'TypeORM',
  'Docker',
  'Kubernetes',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hiranrajofficial@mail.com',
}

export { header, about, projects, skills, contact }
